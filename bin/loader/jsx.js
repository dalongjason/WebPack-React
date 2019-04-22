/**
 *  Created by hu on 2019-04-22.
 **/
const Paths = require('../config/paths');

module.exports={
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
    },
    include: Paths.appSrc,
}