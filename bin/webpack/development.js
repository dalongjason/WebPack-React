const path=require("path");
const Webpack = require('webpack');
module.exports=Development=(Config)=>{
    Config.devServer={
             contentBase: './dist'
    };
    Config.mode='development';
    Config.devtool = 'inline-source-map';
    Config.devServer={
        contentBase:path.join(__dirname,"dist"),
        historyApiFallback: true,
        hot:true,
        inline: true,
        progress: true,
        compress:true,
        port:5000,
        host:'127.0.0.1',
        proxy:{
            "/api/*":{
                target:'http://php.jason.com/api/',
                pathRewrite:{"^/api/":''},
                changeOrigin:true,
                secure: false,
                bypass:function(req, res, proxyOptions){
                    console.log(req, res, proxyOptions)
                }
            }
        }
    }

// 添加 Sourcemap 支持
    Config.plugins.push(
        new Webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['vendor.js'] // vendor 通常不需要 sourcemap
        })
    );
//添加开发时的插件
    Config.plugins.push(
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NamedModulesPlugin(),
        //设置全局变量
        new Webpack.DefinePlugin({
            SERVICE_URL: JSON.stringify('http://php.jason.com/')
        }),
    );
}