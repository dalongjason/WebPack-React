const merge = require('webpack-merge');
const Webpack = require('webpack');
module.exports=Production=(Config)=>{
    Config.devtool='nosources-source-map';
    Config.mode='production';
    Config.plugins.push(
        // 设置全局变量
        new Webpack.DefinePlugin({
            __DEV__: false,
            SERVICE_URL: JSON.stringify('http://blog.timemyh.com/')
        }),
    );
    return merge(Config, {
        mode: 'production',
    })
}