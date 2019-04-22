/**
 *  Created by hu on 2019-04-22.
 **/

module.exports={
    test: /\.(ts|tsx)$/,
    use: [
        {loader:'ts-loader'}, 
    ],
    exclude: /node_modules/
}