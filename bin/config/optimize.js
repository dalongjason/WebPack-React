/**
 *  Created by hu on 2019-04-22.
 *  Updated for Webpack 5
 **/
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (mode) => {
    const plugins = [
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                    },
                ],
            },
        }),
        new TerserPlugin({
            terserOptions: {
                parse: {
                    ecma: 2020,
                },
                compress: {
                    ecma: 5,
                    comparisons: false,
                    inline: 2,
                    drop_console: mode,
                    pure_funcs: mode ? ['console.log'] : [],
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
            extractComments: false,
        })
    ];

    return {
        minimize: mode,
        minimizer: [
            ...plugins
        ],
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                    name: 'vendors',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    }
};
