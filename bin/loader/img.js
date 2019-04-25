/**
 *  Created by hu on 2019-04-22.
 **/

module.exports=(mode)=>{
    return {
        test: /\.(png|jpg|gif|webp|ico)$/,
        use: [
            mode?{
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name:mode?'[contenthash:20].[ext]':'[name].[contenthash:2].[ext]',
                    emitFile: true,
                    outputPath:mode?'static/image':'static/image'
                }
            }:{
                loader:'file-loader',
                options: {
                    name:mode?'[contenthash:20].[ext]':'[name].[contenthash:2].[ext]',
                    emitFile: true,
                    outputPath:mode?'static/image':'static/image'
                }
            },

        ]
    }
}