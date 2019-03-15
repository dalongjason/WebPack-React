/**
 * @Author Jason
 * @Describe 基础Webpack
 * @addTime 2019/03/08
 * @EditTime 2019/03/08
 **/
const path=require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require('webpack');

const Development=require('./webpack/development');
const Production=require('./webpack/production');

const Config={
    entry:{
        app:'./src/app.jsx',
        admin:'./src/admin.js'
    },
    // entry:'./src/app.js',
    output:{
        publicPath:"/",
        filename : 'js/[name].[hash:10].min.js', //打包之后输出的文件名
        chunkFilename: "js/chunk/[name].[hash:10].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },{
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },{
                test: /\.(le|c)ss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|webp|ico|svg)$/,
                use: [
                    {loader: 'url-loader',options: {limit: 10240,name:'[name].[hash:100].[ext]',emitFile: true,outputPath:'images'}},
                ],

            },{
                test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:[
                    {loader:'file-loader',options:{limit: 8192,mimetype: 'application/font-woff',name: 'fonts/[name].[hash:100].[ext]'}}
                ]
            }
        ]
    },
    plugins:[
        new Webpack.ProgressPlugin(),
        //每次打包前，先清空原来目录中的内容
        new CleanWebpackPlugin(),
        //html页面输出目录
        new HtmlWebPackPlugin({
            title:'Blog',
            template: "./template/index.tpl",
            filename: "./index.html",
            favicon:'',
            chunks:['app'],
            hash:true,
            chunksSortMode: 'none',
            minify:{
                removeComments:true,//删除注释
                collapseWhitespace:true,//折叠有助于文档树中文本节点的空白区域
                collapseInlineTagWhitespace:true,//折叠时不要在元素之间留下任何空格
            },
            xhtml:true
        },),
        new HtmlWebPackPlugin({
            title:'BlogAdmin',
            template: "./template/index.tpl",
            filename: "./admin.html",
            chunks:['admin'],
            favicon:'',
            hash:true,
            chunksSortMode: 'none',
            meta:{

            },
            minify:{
                removeComments:true,//删除注释
                collapseWhitespace:true,//折叠有助于文档树中文本节点的空白区域
                collapseInlineTagWhitespace:true,//折叠时不要在元素之间留下任何空格
            },
        }),
        //剥离css文件到单独的目录
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css",
            chunkFilename: "[id].min.css"
        }),
    ],
}

module.exports=(evn,argv)=>{
    if (argv.mode === 'development') {
        Config.mode='development';
        Config.devtool = 'eval-source-map';
        Development(Config);
    }else if(argv.mode === 'production'){
        Config.devtool='nosources-source-map';
        Config.mode='production';
        Production(Config)
    }

    return Config;
}