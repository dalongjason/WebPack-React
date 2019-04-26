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
        },
    }),new TerserPlugin({
        terserOptions: {
            parse: {
                ecma: 8,
            },
            compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
            },
            mangle: {
                safari10: true,
            },
            output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
            },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
    })];

    return {
        minimize: mode,
        minimizer: [
            ...plugins
        ],
        namedChunks: true,
        moduleIds: 'hashed',
        mangleWasmImports: true,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        nodeEnv:mode?'production':'development',
        // splitChunks: {
        //     chunks: 'all',
        //     name: false,
        //     cacheGroups: {
        //         styles: {
        //             name: 'styles',
        //             test: /\.css$/,
        //             chunks: 'all',
        //             enforce: true
        //         },
        //         default: false,
        //         vendors: {
        //             reuseExistingChunk: true,
        //             filename: '[name].bundle.js',
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10
        //         }
        //     }
        // },
        // runtimeChunk: true, // 保持运行时块分离，以启用长期缓存
    }
}