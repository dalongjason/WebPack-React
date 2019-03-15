
const Webpack = require('webpack');
module.exports=Production=(Config)=>{
    Config.plugins.push(
        // 设置全局变量
        new Webpack.DefinePlugin({
            __DEV__: false,
            SERVICE_URL: JSON.stringify('http://blog.timemyh.com/')
        }),
    );

}