/**
 *  Created by hu on 2019-04-26.
 **/
const path = require('path');
const Os = require('os');
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

function getIP(){
    const IPv4=[];
    const networkInterfaces=Os.networkInterfaces();
    const Interfaces=Object.keys(networkInterfaces);
    Interfaces.map(item=>{
        networkInterfaces[item].filter(({family,address})=>{
            if(family==='IPv4'){
                IPv4.push(address)
            }
        });
    });
    return IPv4;
}

module.exports={resolveApp,getServedPath,getPackageValue,fsToExist,getIP}