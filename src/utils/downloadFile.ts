import { message } from 'antd'
import { API as baseURL } from '../config'
import request from './request'

interface DownloadProps {
    tokenPath?: string
    path?: string
    params?: any
    method?: string
}

export const RequestFn = async (actionType: any, params?: any) => {
    try {
        let response: any = await request({
            method: actionType.method,
            path: actionType.path,
            params: {
                ...params
            }
        })
        if (response.code !== 0) {
            message.error(response.msg)
        }
        return response
    } catch (error: any) {
        message.error(error.message)
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

export default function download(props: DownloadProps) {
    const { tokenPath = '', path = '', params = {}, method = 'GET' } = props

    RequestFn(
        {
            method,
            path: tokenPath
        },
        params
    ).then((res) => {
        const url = `${baseURL}${path.replace('{downloadToken}', `${res.data}`)}`

        // 将该url包装成一个连接，并且模拟点击，从而实现下载的功能
        const link = document.createElement('a')
        link.href = url
        // link.download = '模板.word';
        document.body.appendChild(link)
        link.click()
    })
}
