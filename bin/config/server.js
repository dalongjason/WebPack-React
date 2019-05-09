/**
 *  Created by hu on 2019-04-22.
 **/
const Cp  = require('child_process');
const Paths=require('./paths');
const Tool = require('./bin/tool');

const allowedHosts=Tool.getIP();

module.exports=(prot,pathSrc)=>{
    return {
        contentBase:pathSrc,
        historyApiFallback: true,
        hot:true,
        hotOnly: true,
        inline: true,
        progress: true,
        allowedHosts:allowedHosts,//添加白名单服务
        compress:true,
        port:prot,
        disableHostCheck: true,
        host:'0.0.0.0',
        // open: 'Google Chrome',
        stats: Paths.appProxy.stats,
        proxy:{
            ...Paths.appProxy.data
        },
        after: function () {
            allowedHosts.map((item,index)=>{
                console.info(`\u001b[47;30m 服务已启动一下Url可以访问: \u001b[0m`);
                console.info(`\u001b[47;30m ${index}: \u001b[42;30m "http://${item}:${prot}"  入口!!\u001b[0m`);
            })
            switch (process.platform) {
                //mac系统使用 一下命令打开url在浏览器
                case "darwin":
                    Cp.exec(`open http://localhost:${prot}`);
                    break;
                //win系统使用 一下命令打开url在浏览器
                case "win32":
                    Cp.exec(`start http://localhost:${prot}`);
                    break;
                // 默认mac系统
                default:
                    Cp.exec(`open http://localhost:${prot}`);
            }

        }
    }
}
