/**
 *  Created by hu on 2019-04-17.
 **/
import React ,{Component} from 'react';
import '../resource/file/style/app.less';
import '../resource/file/style/iconFont.less';
import '../resource/file/style/app.css';


class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div style={{background:'#FFFFFF'}} className={'radius'}>
                Webpack-React
                <i className="iconfont">&#xe6d4;</i>
                <div className={'dds'}></div>
                <img src={require('../resource/file/image/default.jpg')} alt="图片"/>
            </div>
        )
    }
}

export default App;