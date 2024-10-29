import  { FC, memo } from 'react'
import { useRoutes } from 'react-router-dom'

import { routersList } from '../../routers/router.config'





export const PageContent: FC = () => {
    let element = useRoutes(routersList)
    // return <div className="page-content">{element}</div>

    // 缓存路由
  



    return (
        <div className="page-content">
     
                {element}
      
        </div>
    )
}

export default memo(PageContent)
