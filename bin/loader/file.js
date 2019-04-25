/**
 *  Created by hu on 2019-04-22.
 **/

module.exports=(mode)=>{
    return {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[
            {
                loader:'file-loader',
                options:{
                    limit: 8192000,
                    mimetype: 'application/font-woff',
                    name:mode?'[contenthash:20].[ext]':'[name].[contenthash:2].[ext]',
                    emitFile: true,
                    outputPath:mode?'static/fonts':'static/fonts'
                }
            }
        ]
    }
}