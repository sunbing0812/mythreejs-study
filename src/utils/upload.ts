import { API as baseURL } from '../config'

// 腾讯云上传统一地址
const uploadAction = `${baseURL}/icsp-public/file/qcloud/upload`
const ptmuploadAction = `${baseURL}/icsp-ptms/asset-handle/proxy/chang_yin/local/upload`
// export const uploadAction = `${baseURL}/qcloud/upload?filename=${new Date().getTime()}`;

// 获得腾讯云直传链接
const uploadActionDirect = `${baseURL}/api/icsp-public/file/qcloud/uploadUrl`

// 获取请求headers
const getUploadHeaders = () => {
    const icspToken: any = sessionStorage.getItem('icsp_token')
    const tokenObj: any = JSON.parse(icspToken)
    const uploadActionHeader = {
        sessionid: tokenObj?.sessionid || '',
        // appId: 'web_icsp',
        token: tokenObj?.accessToken || '',
        appId: 'web_icsp'
    }
    return uploadActionHeader
}

export { uploadAction, uploadActionDirect, getUploadHeaders, ptmuploadAction }
