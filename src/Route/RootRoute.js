/**
 * 作者：timeh
 * 描述：路由管理
 * 新增时间：2018/7/25
 * 修改时间：2018/7/25
 **/
import React  from "react";
import { BrowserRouter, Route ,Switch , Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import Routes from './Route';

const RootRoute=({ locals = {} })=>(
    <div>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </div>
)

export default RootRoute;