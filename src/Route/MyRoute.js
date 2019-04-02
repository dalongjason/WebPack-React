/**
 * 作者：timeh
 * 描述：我的路由管理
 * 新增时间：2018/7/25
 * 修改时间：2018/7/25
 **/
import React  from "react";
import {  Route ,Switch } from "react-router-dom";

import My from '../Views/My/index.jsx';
import Error from '../Views/Error/index.jsx';

const MyRoute=()=>(
    <Switch>
        <Route path="/My" component={My}></Route>
        <Route exact path='/My/:id' component={My}></Route>
        <Route component={Error}></Route>
    </Switch>
);

export default MyRoute;

