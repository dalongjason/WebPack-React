/**
 *  Created by hu on 2019-04-22.
 **/
const Paths=require('./paths');
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
        stats: Paths.appProxy.stats,
        proxy:{
            ...Paths.appProxy.data
        }
    }
}
