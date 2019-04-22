/**
 *  Created by hu on 2019-04-17.
 **/
import React ,{Component} from 'react';
import '../resource/file/less/app.less';
import '../resource/file/css/app.css';
class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div style={{background:'#FFFFFF'}} className={'radius'}>
                Webpack-React
            </div>
        )
    }
}

export default App;