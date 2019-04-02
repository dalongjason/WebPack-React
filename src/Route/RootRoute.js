/**
 * 作者：timeh
 * 描述：路由管理
 * 新增时间：2018/7/25
 * 修改时间：2018/7/25
 **/
import React  from "react";
import { BrowserRouter as Router , Route ,Switch } from "react-router-dom";


import Home from '../Views/Home/index.jsx';
import MyRoute from './MyRoute';
import Error from '../Views/Error/index.jsx';


const RootRoute=()=>(
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/My" component={MyRoute}></Route>
                <Route component={Error}></Route>
            </Switch>
        </Router>
    </div>
)

export default RootRoute;