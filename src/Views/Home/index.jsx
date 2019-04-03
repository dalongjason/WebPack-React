import React , {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from "./redux/HomeActions";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            Loading:true
            };
    }

    componentWillMount (){
       
        this.props.ListGet(this.props.match.params.id,(data)=>{
            if(!data) this.props.history.push(`/login`);
            this.setState({
                Loading:false
            })
        })
    }

    render(){
        let {List=[]} =this.props;
        let {Loading} = this.state;

        return(
            <div className="ListBox" style={{backgroundColor:"red"}}>
               我是首页
            </div>
        )
    }
}
export default connect((state) => {
    const {Home} = state;
    return {
        List:Home.List
    }
},Actions)(Home);