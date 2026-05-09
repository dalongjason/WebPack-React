/**
 *  Created by hu on 2019-04-22.
 *  Updated for Webpack 5 - Using Asset Modules
 **/
module.exports = (mode, project) => {
    return {
        test: /\.(png|jpg|gif|webp|ico)$/,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 10 * 1024,
            }
        },
        generator: {
            filename: mode ? 'static/image/[name].[contenthash:20][ext]' : 'static/image/[name].[contenthash:2][ext]'
        }
    }
}
