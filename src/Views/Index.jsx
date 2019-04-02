import React ,{Component} from 'react';
import {Provider} from 'react-redux';
import Store from '../Redux/Store';
import RootRoute from '../Route/RootRoute';

import '../Public/Less/App.less';


class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Provider store={Store}>
                <RootRoute/>
            </Provider>
        )
    }
}

export default App;