import React, { Component,PureComponent ,createElement} from 'react'
/**
  * Webpack按路由分包的异步加载类
  * @method 名称
  * @for JJTool
  * @param {类型} name 描述
  * @return {类型} 描述
*/
const AsyncLoad = (load, placeholder = '拼命加载中...') => {
    return class AsyncComponent extends Component {

        componentWillMount() {
            // 在高阶组件 DidMount 时才去执行网络加载步骤
            load().then(({default: component}) => {
                // 代码加载成功，获取到了代码导出的值，调用 setState 通知高阶组件重新渲染子组件
                this.setState({
                    component,
                })
            });
        }
        render() {
            const {component:Child} = this.state || {};
            return Child ? <Child {...this.props}/> : placeholder// '加载中';
        }
    }
}
export default AsyncLoad;