/**
 *  Created by hu on 2019-04-22.
 **/
const path = require('path');
const fs = require('fs');
const envPublicUrl = process.env.PUBLIC_URL;
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const getPublicUrl = appPackageJson =>envPublicUrl || require(appPackageJson).homepage;

function ensureSlash(inputPath, needsSlash) {
    const hasSlash = inputPath.endsWith('/');
    if (hasSlash && !needsSlash) {
        return inputPath.substr(0, inputPath.length - 1);
    } else if (!hasSlash && needsSlash) {
        return `${inputPath}/`;
    } else {
        return inputPath;
    }
}

function getServedPath(appPackageJson){
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl =
        envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}


module.exports={
    appPath: resolveApp('.'),
    appBuild: resolveApp('dist'),
    servedPath: getServedPath(resolveApp('package.json')),
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
        }
    ]
}