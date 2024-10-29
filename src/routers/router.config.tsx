import React, { lazy, Suspense } from 'react'
import KeepAlive from 'react-activation'
import Loading from '@/components/Loading'
import { RouteObject } from 'react-router-dom'

// 懒加载
const Homepage = lazy(() => import(/* webpackChunkName: "Homepage" */ '../pages/Homepage/index'))


const lazyload = (children: React.ReactNode) => {
    return <Suspense fallback={<div style={{ width: '100%', height: '800px' }}><Loading /></div>}>{children}</Suspense>
}

const home: RouteObject[] = [
    {
        path: '/homepage',
        element:<KeepAlive cacheKey='/homepage' id='/homepage' name='/homepage'>{lazyload(<Homepage />)}</KeepAlive> 
    }
]










// 非目录路由
const others: RouteObject[] = [
  
    

]
// 汇总目录list
const menuList: RouteObject[] = [
    ...home,

]
// 汇总路由list
export const routersList: RouteObject[] = [...menuList, ...others]

export default menuList
