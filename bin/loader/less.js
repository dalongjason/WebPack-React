/**
 *  Created by hu on 2019-04-22.
 **/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");
module.exports=(mode)=>{
    return {
        test: /\.less$/,
        use: [
            !mode?{loader:'style-loader',options: {
                    hmr: false
                }
            }:{loader:MiniCssExtractPlugin.loader,options:{
                    publicPath: '/',
                }
            },
            { loader: 'css-loader', options: {
                    // exportOnlyLocals: true,
                }
            },
            { loader: 'less-loader', options: {
                    strictMath: true,
                    noIeCompat: true,
                    plugins: [
                        new CleanCSSPlugin({ advanced: true })
                    ]
                }
            }
        ]
    }
}