
class Token{
    static save=(key,vlaue,stage='480')=>{
        let have= localStorage.getItem(key);
        if(!have){
            let Data=typeof vlaue=='object'?
                        Object.assign({},{data:vlaue},{time:new Date().getTime(),stage:(1000*60*stage)})
                        :Object.assign({data:vlaue,time:new Date().getTime(),stage:(1000*60*stage)});
            localStorage.setItem(key,JSON.stringify(Data))
            return true;
        }
        return false;
    }

    static get=(key)=>{
        let Data=localStorage.getItem(key);
       if(Data){
            let {data='',time=0,stage=0}=JSON.parse(Data);
            let thistime=(new Date().getTime())-stage

            if(thistime<time){
                console.log(thistime,time)
                return data;
            }
            localStorage.removeItem(key);
       }
        return false;
    }


}

//
export default Token;