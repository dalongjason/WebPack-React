/**
 *  Created by hu on 2019-04-22.
 **/
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports={
    appPath: resolveApp('.'),
    appBuild: resolveApp('dist'),
    servedPath:resolveApp('/'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('template/index.tpl'||'template/index.html'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appTsConfig: resolveApp('tsconfig.json'),
    yarnLockFile: resolveApp('yarn.lock'),
    proxySetup: resolveApp('src/setupProxy.js'),
    appNodeModules: resolveApp('node_modules'),
    appEntry:[
        {
            keys:'index',
            title:'webpack',
            pathData:resolveApp('src/index.js'),
            chunks:['index']
        },
        {
            keys:'app',
            title:'React',
            pathData:resolveApp('src/app.js'),
            chunks:['app']
        }
    ]
}