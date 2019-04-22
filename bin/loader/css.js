/**
 *  Created by hu on 2019-04-22.
 **/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
    test: /\.css$/,
    use: [
        {loader:'style-loader',options: {
            hmr: false
          }
        },
        MiniCssExtractPlugin.loader,
        {loader:'css-loader', options: {
            modules: true,
          }
        }
    ],
}