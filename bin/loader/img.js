/**
 *  Created by hu on 2019-04-22.
 **/

module.exports={
    test: /\.(png|jpg|gif|webp|ico|svg)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 10240,
                name:'[name].[hash:8].[ext]',
                emitFile: true,
                outputPath:'images'
            }
        },
        {
            loader:'file-loader',
            options: {
                name:'[name].[hash:8].[ext]',
                emitFile: true,
                outputPath:'images'
            }
        }
    ]
}