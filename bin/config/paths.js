/**
 *  Created by hu on 2019-04-22.
 **/

const Tool = require('./bin/tool');


module.exports={
    appPath: Tool.resolveApp('.'),
    appBuild: Tool.resolveApp('dist'),
    servedPath: Tool.getServedPath(Tool.resolveApp('package.json')),
    appPublic: Tool.resolveApp('public'),
    appHtml: Tool.resolveApp('template/index.tpl'||'template/index.html'),
    appPackageJson: Tool.resolveApp('package.json'),
    appSrc: Tool.resolveApp('src'),
    appTsConfig: Tool.resolveApp('tsconfig.json'),
    yarnLockFile: Tool.resolveApp('yarn.lock'),
    proxySetup: Tool.resolveApp('src/setupProxy.js'),
    appNodeModules: Tool.resolveApp('node_modules'),
    appEntry:Tool.getPackageValue('main')!=undefined&&(Tool.getPackageValue('main')).length>=1?Tool.getPackageValue('main'):[
        {
            keys:'index',
            title:'webpack',
            pathData:Tool.resolveApp('src/index.js'),
            chunks:['index']
        }
    ],
    appCopy:Tool.getPackageValue('resource')!=undefined?Tool.getPackageValue('resource'):[],
    appProxy:Tool.getPackageValue('proxy')!=undefined?Tool.getPackageValue('proxy'):{
        stats:'errors-only',
        data:{

        }
    },

}