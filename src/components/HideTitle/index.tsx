import { FC, memo, useState } from 'react'
import BlueLineTitle from '../BlueLineTitle'
import zhankai from '../../assets/images/ptms/zhankai1.png'
import shouqi from '../../assets/images/ptms/shouqi1.png'

import './index.scss'

interface ViewProps {
    title: string
    children: any
}

const HideTitle: FC<ViewProps> = ({ title, children }) => {
    const [show, setshow] = useState(true)

    return (
        <div className="hide-title">
            <BlueLineTitle title={title}>
                <img
                    src={show ? shouqi : zhankai}
                    onClick={() => setshow(!show)}
                    className="hide-icon"
                />
            </BlueLineTitle>

            <div style={{ display: show ? 'block' : 'none' }}>{children}</div>
        </div>
    )
}

export default memo(HideTitle)
