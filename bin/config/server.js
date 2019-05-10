/**
 *  Created by hu on 2019-04-22.
 **/
const Paths=require('./paths');
const Tool = require('./bin/tool');

const allowedHosts=Tool.getIP();

module.exports=(prot,pathSrc)=>{
    return {
        contentBase:pathSrc,
        historyApiFallback: true,
        hot:true,
        hotOnly: true, //布局刷新
        inline: true,
        progress: true,
        allowedHosts:allowedHosts,//添加白名单服务
        compress:true,
        port:prot,
        disableHostCheck: true,
        host:'0.0.0.0',
        stats: Paths.appProxy.stats,
        proxy:{
            ...Paths.appProxy.data
        },
        after: function () {
            allowedHosts.map((item,index)=>{
                console.info(`\u001b[47;30m 服务已启动一下Url可以访问: \u001b[0m`);
                console.info(`\u001b[47;30m ${index}: \u001b[42;30m "http://${item}:${prot}"  入口!!\u001b[0m`);
            })
            Tool.openBrowser(prot);
        }
    }
}
