import * as math from 'mathjs'



/**
 * 对象转URL
 */
export const urlEncode = (data: any) => {
    let _result = []
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key]
            if (value === undefined) {
                _result.push(key + '= ')
            } else {
                _result.push(key + '=' + value)
            }
        }
    }
    return _result.join('&')
}

/**
 * URL转对象
 */
export const getQueryObj = (data: string) => {
    if (data !== '') {
        const newData = data.replace('?', '')
        const queryArr = newData.split('&')
        return queryArr.reduce((acc, one) => {
            const arr = one.split('=')
            return {
                ...acc,
                [arr[0]]: decodeURIComponent(arr[1])
            }
        }, {})
    } else {
        return {}
    }
}



//精度计算
export const printFn = (value: number) => {
    const precision = 14
    return Number(math.format(value, precision))
  }

 
 

// 开发环境
export const isDev = import.meta.env.VITE_USER_NODE_ENV === 'development'
