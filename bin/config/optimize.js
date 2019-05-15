/**
 *  Created by hu on 2019-04-22.
 **/
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');


module.exports=(mode)=>{
    //这只在生产模式中使用
    let plugins=[new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
            parser: safePostCssParser,
            map: {inline: false,annotation: true,},
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            safe: true,
            discardComments: {
                removeAll: true
            }
        },
    }),new TerserPlugin({
        terserOptions: {
            parse: {
                ecma: 8,
            },
            compress: {
                ecma: 6,
                warnings: mode?true:false,
                comparisons: mode?true:false,
                inline: 2,
            },
            mangle: {
                safari10: true,
                ie8: false,
            },
            output: {
                ecma: 6,
                comments: false,
                ascii_only: true,
            },
        },
        parallel: true, //启用、禁用多进程并行运行。true、false或Number值
        cache: true, //启用/禁用文件缓存。true、false或路径
        sourceMap: !mode?true:false, //使用源映射将错误消息位置映射到模块(这会降低编译速度)
    })];
    // process.exit();
    return {
        minimize: mode,
        minimizer: [
            ...plugins
        ],
        namedChunks: true,
        moduleIds: mode?false:'hashed',
        mangleWasmImports: true,//告知 webpack 通过将导入修改为更短的字符串，来减少 WASM 大小
        removeAvailableModules: true,//如果模块已经包含在所有父级模块中，告知 webpack 从 chunk 中检测出这些模块，或移除这些模块。
        removeEmptyChunks: true,//如果 chunk 为空，告知 webpack 检测或移除这些 chunk
        mergeDuplicateChunks: true,// 合并含有相同模块的 chunk
        flagIncludedChunks: true, //告知 webpack 确定和标记出作为其他 chunk 子集的那些 chunk，其方式是在已经加载过较大的 chunk 之后，就不再去加载这些 chunk 子集
        nodeEnv:process.env.NODE_ENV,
        occurrenceOrder:mode,
        // runtimeChunk: {
        //     name: entrypoint => `runtimechunk~${entrypoint.name}`
        // },
        splitChunks: {
            chunks: "all", // initial、async和all
            minSize: 30000,// 形成一个新代码块最小的体积
            minChunks: 1,
            maxAsyncRequests: 5,// 按需加载时候最大的并行请求数
            maxInitialRequests: 2,// 最大初始化请求数
            automaticNameDelimiter: '~',   // 打包分割符
            name: true,
            cacheGroups: {
                commons: { // 项目基本框架等
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "initial"
                }
            }
        }
    }
}