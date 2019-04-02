/**
 * 作者：timeh
 * 描述：
 * 新增时间：2018/8/1
 * 修改时间：2018/8/1
 **/
import React , {Component} from 'react';

import  './Toast.less';

class Popen extends Component{
    Open=(Msg,{Time=1000,Backgunod='',Color=''})=>{
        let ToastID=`Toast-${new Date().getTime()}`;
        let DOM=document.createElement('div');
        let DOMCon=document.createTextNode(Msg);
        DOM.appendChild(DOMCon);
        DOM.classList='Toast';
        DOM.id=ToastID;
        DOM.style.background=Backgunod;
        DOM.style.color=Color;
        document.body.appendChild(DOM);

       setTimeout(()=>this.Show(ToastID),Time)
    }
    Show=(ID)=>{
        let DOM=document.getElementById(ID);
        document.body.removeChild(DOM)
    }
}

export default Popen;