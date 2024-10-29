import { useEffect } from 'react'
import PageContent from './pageContent'



import './index.scss'

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])





    // 为了设置滚动条样式
    const customScrollbar = () => {
        let mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
        if (mac) return
        // windows 下才会给body 加edited_scrollbar 改变滚动条样式
        document.getElementsByTagName('body')[0].className = 'edited_scrollbar'
    }

    useEffect(() => {
        customScrollbar()
    }, [])

    return (
        <>
            <PageContent />
       
        </>
    )
}

export default Layout
