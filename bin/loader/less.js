/**
 *  Created by hu on 2019-04-22.
 **/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");
module.exports={
    test: /\.less$/,
    use: [
      { loader: 'style-loader' ,options: {
          hmr: false
        }
      },
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options: { 
          modules: true,
          camelCase:false,
        } 
      },
      { loader: 'less-loader', options: { 
        strictMath: true,
        noIeCompat: true,
        minimize:true,
        // plugins: [
        //   new CleanCSSPlugin({ advanced: true })
        // ]
      } 
      }
    ]
}