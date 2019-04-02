/**
 * 作者：timeh
 * 描述：网络请求
 * 新增时间：2018/7/24
 * 修改时间：2018/7/24
 **/
require('es6-promise').polyfill();
require('es6-promise/auto');

class NetWork {
    constructor(){

    }

    static _fetch(fetch){
        return Promise.race([
            fetch,
            new Promise((resolve, reject)=>{
                setInterval(()=>{
                    reject(new Error(`网络请求超时,请检查网络,稍后再试！`));
                },100000)
            })
        ])
    }
    static Post(Url='',params={}){
        let FinalUrl=`${SERVICE_URL}${Url}`;
        return this._fetch(fetch(FinalUrl,{
                method: 'POST',
                mode: "no-cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(params),
            }).then(response=>{
                if (response.ok){
                    return response.json();
                }else {
                    return Promise.reject(`网络请求失败！`)
                }
            }).then(response=>{
                return response;
            }).catch(error=>{
                 return Promise.reject(`请求失败:${error}`)
            })
        )
    }
    static Get(Url='',params={},other={}){
        let UrlParams=new String(Url);
        if(params){
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            if (UrlParams.includes("?")) {
                UrlParams+=paramsArray.join("&");
            }else{
                UrlParams+=`?${paramsArray.join("&")}`;
            }
        }
        let FinalUrl=`${SERVICE_URL}${UrlParams}`;
        return this._fetch(fetch(FinalUrl,{
                method:'GET',
                // mode: "no-cors",
                credentials: 'include',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...other
                }
             }).then(response=>{
                 console.log(response)
                if (response.ok){
                    return response.json();
                }else {
                   return Promise.reject(`网络请求失败！`);
                }
            }).then(response=>{
                return response;
            }).catch(error=>{
                return Promise.reject(`请求失败:${error}`)
            })
        );
    }
}

export default NetWork;