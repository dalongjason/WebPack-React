/**
 *  Created by hu on 2019-04-19.
 **/
const path = require('path');
const Webpack = require('webpack');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


const Loader = require('./loader');
const Paths = require('./config/paths');
const Server = require('./config/server');
const Optimize = require('./config/optimize');

module.exports = (env,argv)=>{
    const isEnvDevelopment=argv.mode==='development';
    const isEnvProduction=argv.mode==='production';

    const publicPath=isEnvProduction?Paths.servedPath:'/';

    const WebpackServer= isEnvDevelopment?{devServer:Server(argv.prot,Paths.servedPath),optimization:Optimize(isEnvProduction)}:{optimization:Optimize(isEnvProduction)};
    const devtool=isEnvDevelopment?'cheap-module-source-map':'nosources-source-map';
    //生成入口
    appEntry=(arr)=>{
        let appEntry={};
        arr.map(({keys='',pathData=''})=>{
             appEntry[keys]=[
                     isEnvDevelopment&&require.resolve('react-dev-utils/webpackHotDevClient'),
                     pathData
                 ].filter(Boolean)
        })
        return appEntry;
    }
    //生成html文件

    appHtml=(arr)=>{
        let appHtml=[];
        arr.map(({keys='',title='',chunks=[]})=>{
            appHtml.push(new HtmlWebpackPlugin(Object.assign({},{
                template: Paths.appHtml,
                favicon:'',
                hash:true,
                chunksSortMode: 'none',
                title:title,
                filename: `./${keys}.html`,
                chunks:[...chunks],
                inject: true,
                xhtml:true
            },isEnvProduction?{
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    collapseInlineTagWhitespace:true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                }
            }:undefined)))
        })
        return appHtml;
    }
    return{
        entry:appEntry(Paths.appEntry),
        output:{
            path: isEnvProduction ? Paths.appBuild : Paths.servedPath,//建立文件夹。
            pathinfo: isEnvDevelopment,// 向输出中生成的require()添加/* filename */注释。
            filename: isEnvProduction? 'static/js/[name].[contenthash:8].js': isEnvDevelopment && 'static/js/[name].js',//每个异步块将有一个主包和一个文件。在开发中，它不会生成真正的文件。
            chunkFilename: isEnvProduction?'static/js/chunk/[name].[contenthash:8].js':isEnvDevelopment && 'static/js/chunk/[name].chunk.js',//如果使用代码分割，还有额外的JS块文件。
            publicPath: publicPath,
            devtoolModuleFilenameTemplate: isEnvProduction // 指向原始磁盘位置的点sourcemap条目(格式为Windows上的URL)
                ?info =>
                    path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'):
                    isEnvDevelopment&&(info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
        },
        mode:argv.mode,
        watch: true,
        bail:isEnvProduction,
        devtool:devtool,
        module:{
            rules:[
                ...Loader(isEnvProduction)
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ,'.jsx']
        },
        ...WebpackServer,
        plugins: [
            new Webpack.ProgressPlugin(),
            isEnvProduction?new CleanWebpackPlugin():new Webpack.HotModuleReplacementPlugin(),
            ...appHtml(Paths.appEntry),
            new WebpackManifestPlugin({
                fileName: 'asset-manifest.json',
                publicPath: publicPath,
            }),
            new MiniCssExtractPlugin({
                filename: isEnvProduction?"static/css/[name].[contenthash:8].css":isEnvDevelopment&&"static/css/[name].css",
                chunkFilename: isEnvProduction?"static/css/[id].[contenthash:8].css":isEnvDevelopment&&"static/css/[id].css"
              })
        ],

    }
}