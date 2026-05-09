/**
 *  Created by hu on 2019-04-22.
 *  Updated for Webpack 5
 **/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {
    return {
        test: /\.less$/,
        use: [
            !mode ? {
                loader: 'style-loader',
                options: {
                    hmr: false
                }
            } : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '/',
                }
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 0,
                }
            },
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        strictMath: true,
                        noIeCompat: true,
                    }
                }
            }
        ]
    }
}
