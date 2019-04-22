/**
 *  Created by hu on 2019-04-22.
 **/
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');


module.exports=(mode)=>{
    return {
        minimize: mode,
        minimizer: [
            // 这只在生产模式中使用
            new TerserPlugin({
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
            }),
            // 这只在生产模式中使用
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    parser: safePostCssParser,
                    map: {inline: false,annotation: true,},
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        runtimeChunk: true, // 保持运行时块分离，以启用长期缓存
    }
}