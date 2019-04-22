/**
 *  Created by hu on 2019-04-22.
 **/

module.exports={
    test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use:[
        {loader:'file-loader',options:{limit: 8192,mimetype: 'application/font-woff',name: 'fonts/[name].[hash:100].[ext]'}}
    ]
}