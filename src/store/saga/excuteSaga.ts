import { message } from 'antd'
import request from '../../utils/request'
import { put } from '@redux-saga/core/effects'
interface Response {
    code: number
    data?: any
    msg: string
    timestamp?: string
}
interface ApiItem {
    method: string
    path: string
}
interface actionType {
    type: string
    payload?: any
}

export default function executeSaga(key: string, action: actionType) {
    return function* (props: ApiItem) {
        const { method, path } = props
        try {
            let response: Response = yield request({ method, path, params: action.payload })
            if (response.code === 0) {
                yield put({
                    type: `${key}_SUCCESS`,
                    data: response.data
                })
            } else {
                if (response.code === 100104) {
                    sessionStorage.clear()
                    window.location.href = `${
                        window.location.origin + window.location.pathname
                    }/#/login`
                    console.log('window.location.href', window.location.href)
                    return
                }
                message.error(response.msg)
                yield put({
                    type: `${key}_FAIL`,
                    msg: response.msg
                })
            }
        } catch (error: any) {
            message.error(error.message)
            yield put({
                type: `${key}_FAIL`,
                msg: error.message || error.msg
            })
        }
    }
}
