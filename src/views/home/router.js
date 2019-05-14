/**
  * 首页路由栈
*/
import AsyncLoad from "../../router/AsyncLoad";

const HomeRoter=[
    {
        path: "/",
        exact: true,
        component:AsyncLoad(/* webpackChunkName: 'home' */()=>import('./index'))
    },
]

export default HomeRoter;