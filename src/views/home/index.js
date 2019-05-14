import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <div>首页</div>
                <button onClick={()=>this.props.history.push('my')}>去我的页面</button>
            </div>
        )
    }
}
export default Home;