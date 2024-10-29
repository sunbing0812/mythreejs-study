export interface Init {
    loaded: boolean
    success: boolean
    msg?: string
    data?: any
}
export const init = {
    loaded: false,
    success: false
}
export const hasDataReturn = (data: any) => ({ loaded: true, success: true, data })
export const hasMsgReturn = (msg: string) => ({ loaded: true, success: false, msg })
export const successReturn = () => ({ loaded: true, success: true })

// 转化为驼峰state
export const strCamel = (str: string, end: string): string => {
    const arr = str.toLowerCase().split('_')
    const newArr = arr.map((item: string, i: number) => {
        if (i > 0) return item.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
        else return item
    })
    newArr.pop()
    return newArr.join('') + end
}
