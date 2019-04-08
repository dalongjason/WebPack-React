/**
 * @Author Jason
 * @Describe 基础Webpack
 * @addTime 2019/03/08
 * @EditTime 2019/03/08
 **/
const path=require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Webpack = require('webpack');

const Development=require('./webpack/development');
const Production=require('./webpack/production');
const HtmlWeb=require('./webpack/HtmlWeb');

const Config={
    entry:{
        app:'./src/app.jsx',
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        publicPath:"/",
        filename : 'js/[name].min.js', //打包之后输出的文件名
        chunkFilename: "js/chunk/[name].js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },{
                test: /\.(sa|sc|le|c)ss$/i,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader ,options:{
                            minimize: true,
                            publicPath: '../'
                        }
                    }, {
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader', options: {
                            strictMath: true,
                            noIeCompat: true
                        }
                    },{
                        loader:'sass-loader',options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    }
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

        // html页面输出目录
        new HtmlWebPackPlugin({
            title:'苏宁消费金融',
            filename: "./index.html",
            chunks:['app'],
            ...HtmlWeb,
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
        Development(Config);
    }else if(argv.mode === 'production'){
        Production(Config)
    }else {
        console.log(argv.mode,'@@@@@@@@@@@@@@@')
    }

    return Config;
}