/**
 * 我的路由栈
 */
import AsyncLoad from "../../router/AsyncLoad";

const MyRoter=[
    {
        path: "/my",
        exact: true,
        component:AsyncLoad(/* webpackChunkName: 'My' */()=>import('./index'))
    },
]

export default MyRoter;