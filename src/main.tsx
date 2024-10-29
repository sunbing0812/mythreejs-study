import "normalize.css";
// 兼容ie11
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from './store'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Router from './routers/index'
import {AliveScope} from "react-activation";
// import 'moment/locale/zh-cn'
import zhCN from 'antd/es/locale/zh_CN'


const ZhLocale: typeof zhCN = zhCN
ZhLocale.DatePicker!.lang = {
    ...zhCN.DatePicker!.lang,
    monthFormat: 'M月',
    shortWeekDays: ['日', '一', '二', '三', '四', '五', '六']
}





ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ConfigProvider locale={zhCN}>
      <Provider store={store}>
      <AliveScope>
      <Router />
      </AliveScope>
      
      </Provider>
  </ConfigProvider>
</BrowserRouter>

);
