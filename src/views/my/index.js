import React, {Component} from 'react';


import '../../resource/file/style/app.less';
import '../../resource/file/style/iconFont.less';
import '../../resource/file/style/app.css';

class My extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <div style={{background:'#FFFFFF'}} className={'radius'}>
                    Webpack-React
                    <div className="dds"></div>
                    <i className="iconfont">&#xe6d4;</i>
                    <img src={require('../../resource/file/image/default.jpg')} alt="图片"/>
                </div>
            </div>
        )
    }
}
export default My;