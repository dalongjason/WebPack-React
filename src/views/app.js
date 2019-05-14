/**
 *  Created by hu on 2019-04-17.
 **/
import React ,{Component} from 'react';
import RootRouter from '../router/RootRouter';

class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <RootRouter/>
        )
    }
}

export default App;