/**
 *  Created by hu on 2019-04-22.
 *  Updated for Webpack 5 / Webpack Dev Server 4.x
 **/
const path = require('path');
const Paths = require('./paths');
const Tool = require('./bin/tool');

const allowedHosts = Tool.getIP();

module.exports = (prot, pathSrc) => {
    return {
        static: {
            directory: path.resolve(__dirname, '../../public'),
            publicPath: ['/'],
        },
        historyApiFallback: true,
        hot: true,
        liveReload: false,
        compress: true,
        port: prot,
        allowedHosts: allowedHosts,
        host: '0.0.0.0',
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
        },
        devMiddleware: {
            stats: 'errors-warnings',
            writeToDisk: true,
        },
        proxy: {
            ...Paths.appProxy.data
        },
        onAfterSetupMiddleware: function(devServer) {
            allowedHosts.map((item, index) => {
                console.info(`\u001B[47;30m 服务已启动，以下Url可以访问: \u001B[0m`);
                console.info(`\u001B[47;30m ${index}: \u001B[42;30m "http://${item}:${prot}"  入口!!\u001B[0m`);
            });
        },
    }
};
