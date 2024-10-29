import './index.scss'

import warn from '../../assets/images/ptms/warn.png'
import iconLine from '../../assets/images/ptms/icon_header_line.png'
import { Button } from 'antd'

import btnAdd from '../../assets/images/ptms/btn_add.png'

export interface btnObjProps {
    isHasIcon?: Boolean
    btnIcon?: any
    btnText: string
    btnOClickFn?: any
    disabled?: any
}

export const initBtnObj = {
    isHasIcon: true,
    btnIcon: null,
    btnText: '',
    disabled: false,
    btnOClickFn: () => {}
}
interface TitleProps {
    title: string
    tipText?: any
    btnObj?: btnObjProps
    children?: any
    rightContentFn?: Function
    style?: object
    color?: string
}

const BlueLineTitle = (props: TitleProps) => {
    const {
        title, // 标题
        tipText, // 注意项提示文字
        btnObj = initBtnObj, // 标题旁按钮 obj
        children, // BlueLineTitle组件内自定义灵活配置任何类型内容，传参使用方法：<BlueLineTitle>{children}</BlueLineTitle
        rightContentFn, // 右侧自定义内容
        style = {}, // blue-line-title style
        color = '004098'
    } = props

    return (
        <div className="blue-line-title" style={style}>
            <div className="titleBox">
                {/* title 前面icon */}
                <img src={iconLine} alt="" className="iconLine" />

                {/* title */}
                <div className="lineTit" style={{ color: color }}>
                    {title}
                </div>

                {/* title 旁边按钮 */}
                {btnObj?.btnText && (
                    <Button
                        className="btnBox"
                        type="primary"
                        onClick={btnObj?.btnOClickFn}
                        disabled={!!btnObj?.disabled}
                    >
                        {btnObj.isHasIcon && <img src={btnObj.btnIcon || btnAdd} />}
                        {btnObj.btnText}
                    </Button>
                )}

                {/* title 旁边警告 ⚠️ 提示 */}
                {tipText && (
                    <div className="tipText">
                        <img src={warn} className="warnIcon" />
                        {tipText}
                    </div>
                )}

                {/* 自定义灵活配置任何类型内容 */}
                <span className="children">{children}</span>
            </div>

            {/* 右侧自定义内容配置 */}
            {rightContentFn && <div className="rightContent">{rightContentFn()}</div>}
        </div>
    )
}

export default BlueLineTitle
