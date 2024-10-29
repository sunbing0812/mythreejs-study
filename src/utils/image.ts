// 获取图片尺寸
const getImgSize = (file: any) => {
    return new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e: any) => {
            const img: HTMLImageElement = document.createElement('img')
            img.src = e.target.result
            img.onload = () => {
                resolve({
                    width: img.width,
                    height: img.height
                })
            }
        }
    })
}

const accept = ['image/png', 'image/jpeg', 'image/jpg', 'image/bmp']

export { getImgSize, accept }
