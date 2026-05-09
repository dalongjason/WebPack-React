/**
 *  Created by hu on 2019-04-22.
 *  Updated for Webpack 5 - Using Asset Modules
 **/

module.exports = (mode) => {
    return {
        test: /\.(woff|woff2|eot|ttf|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: 'asset/resource',
        generator: {
            filename: mode ? 'static/fonts/[name].[contenthash:20][ext]' : 'static/fonts/[name].[contenthash:2][ext]'
        }
    }
}
