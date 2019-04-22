/**
 *  Created by hu on 2019-04-22.
 **/
module.exports=(prot,pathSrc)=>{
    return {
        contentBase:pathSrc,
        historyApiFallback: true,
        hot:true,
        inline: true,
        progress: true,
        compress:true,
        port:prot,
        host:'127.0.0.1',
        stats: 'errors-only',
        proxy:{
            "/api/*":{
                target:'http://php.jason.com/api/',
                pathRewrite:{"^/api/":''},
                changeOrigin:true,
                secure: false,
                bypass:function(req, res, proxyOptions){
                    console.log(req, res, proxyOptions)
                }
            },
        }
    }
}