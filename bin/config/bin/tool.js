/**
 *  Created by hu on 2019-04-26.
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

function getPackageValue(key){
    const  Package=require(resolveApp('package.json'))
    return Package[key]!=null?Package[key]:undefined
}

function fsToExist(name,ext='js'){
    let pathexist=`${name}.${ext}`;
}


module.exports={resolveApp,getServedPath,getPackageValue,fsToExist}