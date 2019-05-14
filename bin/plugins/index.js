const Webpack = require('webpack'); //webpack
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清空打包目录
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); //能够更好在终端看到webapck运行的警告和错误
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;//webpack分析将bundle内容表示为方便的交互式可缩放树形图
const CompressionWebpackPlugin = require('compression-webpack-plugin'); //Gzip压缩插件

/**
  * 插件
  * @param {boolean} mode 描述
  * @return {Array} 插件的数组
*/

module.exports=(mode=true)=>{
    let plugins=[];
    if(mode){
        plugins.push(...[
            new CleanWebpackPlugin(),
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css|html|svg|ts)$/,
                threshold: 10240, // 只处理大于xx字节 的文件，默认：0
                minRatio: 0.8, // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75 默认: 0.8
                deleteOriginalAssets: false //是否删除原始资源。默认: false
            }),
            new BundleAnalyzerPlugin(),
        ])
    }else {
        plugins.push(...[
            new Webpack.HotModuleReplacementPlugin(),
            new FriendlyErrorsWebpackPlugin({
                // 运行成功
                compilationSuccessInfo:{
                    message:['你的应用程序在这里运行http：// localhost：3000'],
                    notes:['编译成功,报错后在次编译可能页面不能自动刷新,如为自动刷新！请手动刷新']
                },
                // 运行错误
                onErrors:function(severity,errors){
                    console.log(severity);
                    if(severity==='error'){
                        errors.map((itme,index)=>{
                            let {severity='',webpackError='',name='',origin='',file=''} =itme;
                            console.error(`\u001b[41;37m ERROR:${index+1} \u001b[0;31m "${webpackError}"!! \u001b[0m`);
                        })
                    }
                },
                clearConsole:true,////是否每次编译之间清除控制台,默认为true
            }),
        ])
    }

    return plugins;
}