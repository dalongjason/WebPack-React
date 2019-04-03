const merge = require('webpack-merge');
const Webpack = require('webpack');
module.exports=Production=(Config)=>{
    Config.plugins.push(
        // 设置全局变量
        new Webpack.DefinePlugin({
            production: false,
            SERVICE_URL: JSON.stringify('http://blog.timemyh.com/')
        }),
    );
    // Config.
    return merge(Config, {
        mode: 'production',
        devtool:'nosources-source-map',
        optimization:{
            minimize:true,
        }
    })
}