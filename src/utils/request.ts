import axios, { AxiosRequestConfig } from 'axios'
import { API as baseURL } from '../config'
import {  urlEncode } from './index'
import JSONBIG from 'json-bigint'
import { message } from 'antd'
interface RequestProps {
    path: string
    method?: string
    headers?: any
    timeout?: number
    params?: any
    responseType?: any
}

export default function request(props: RequestProps) {
    const {
        method = 'post',
        headers = {},
        timeout = 60 * 1000,
        params = {},
        path = '',
        responseType = ''
    } = props
    const icspToken: any = sessionStorage.getItem('icsp_token')
    const tokenObj: any = JSON.parse(icspToken)

    if (icspToken) {
        headers.sessionid = tokenObj?.sessionid || ''
        headers.token = tokenObj?.accessToken || ''
        // headers.appId = 'web_icsp';
    }
    headers.appId = 'web_icsp'
    const myrequest = axios.create({
        baseURL,
        timeout,
        headers: {
            ...headers,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        responseType,
        transformResponse: [
            function (data) {
                try {
                    // 如果转换成功则返回转换的数据结果
                    return JSONBIG.parse(data)
                } catch (err) {
                    // 如果转换失败，则包装为统一数据格式并返回
                    return {
                        data
                    }
                }
            }
        ]
    })

    // 添加请求拦截器
    myrequest.interceptors.request.use((config: AxiosRequestConfig | any) => {
        if (config.method === 'get') {
            //  给data赋值以绕过if判断
            config.data = true
        }
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    })

    // 添加响应拦截器
    myrequest.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                return response.data
            }
        },
        (error) => {
            message.error(error.message)
            return Promise.reject(error.response ? error.response.data : error)
        }
    )
    const { pathParams = {}, ...rest } = params
    let url = path
    // 拼接参数
    Object.keys(pathParams).forEach((key) => {
        url = url.replace(`{${key}}`, pathParams[key])
    })

    switch (method) {
        case 'POST':
            if (headers['Content-Type'] === 'multipart/form-data') {
                const { file, filename, filenames } = rest
                return myrequest.post(
                    `${url}?${filename ? 'filename' : 'filenames'}=${
                        filename ? filename : filenames
                    }`,
                    file
                )
            }
            return myrequest.post(url, rest)
        case 'GET':
            return myrequest.get(`${url}?${urlEncode(rest)}`)
        case 'PUT':
            return myrequest.put(url, rest)
        case 'DELETE':
            return myrequest.delete(`${url}?${urlEncode(rest)}`)
    }
}

// 适用于不需要存 store 的请求方法 - 可直接拿请求回调
export const requestFn = async (actionType: any, params?: any) => {
    try {
        let response: any = await request({
            method: actionType.method,
            path: actionType.path,
            params: {
                ...params
            }
        })
        if (response.code === 0) {
            return response
        } else {
            if (response.code !== 100104 && response.code !== 100110) {
                message.error(response.msg)
            }
        }
    } catch (error: any) {
        console.log('requestFn-error.message', error)
        // message.error(error.message)
        return error
    }
}

// 文件打开
export const downLoad = async (obj: any) => {
    const { actionType, params, responseType } = obj
    try {
        let response: any = await request({
            method: actionType.method,
            path: actionType.path,
            params,
            responseType
        })
        // 创建 blob对象 第一个参数 response.data是代表后端返回的文件流  ，第二个参数设置文件类型
        let blob = new Blob([response.data], { type: 'application/pdf;charset=UTF-8' })
        // 生成生成下载链接
        const url = window.URL.createObjectURL(blob)

        // 将该url包装成一个连接，并且模拟点击，从而实现下载的功能
        const link = document.createElement('a')
        link.href = url
        link.target = '_blank'
        // link.download = '模板.word';
        document.body.appendChild(link)
        link.click()
    } catch (error: any) {
        message.error('打开失败', 0.2)
        return error
    }
}
