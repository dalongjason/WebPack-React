/**
 *  Created by hu on 2019-04-22.
 **/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports=(mode,project,resourcepath)=>{
    return {
        test: /\.css$/,
        use: [
            !mode?{loader:'style-loader',options: {
                    hmr: false
                }
            }:{loader:MiniCssExtractPlugin.loader,options: Object.assign(
                    {},
                    resourcepath ? { publicPath: '../../' } : {publicPath: '/'}
                ),
            },
            {loader:'css-loader', options: {
                    // exportOnlyLocals: true,
                }
            },
            // {loader:'postcss-loader', options: {
            //
            //     }
            // }
        ],
    }
}