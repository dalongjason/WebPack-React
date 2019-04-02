/**
 * 作者：timeh
 * 描述：
 * 新增时间：2018/8/1
 * 修改时间：2018/8/1
 **/

import  Popen from './Popen';
const toast=new Popen();
class Toast {
    static success=(data)=>{
        toast.Open(data,{
            Time:3000,
        })
    }
    static info=(data)=>{

    }
    static error=(data)=>{

    }
    static warn=(data)=>{

    }
}

export default Toast;