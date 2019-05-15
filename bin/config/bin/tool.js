/**
 *  Created by hu on 2019-04-26.
 **/
const Path = require('path');
const Os = require('os');
const Fs = require('fs');
const Cp  = require('child_process');
const Net = require('net');
const Url = require('url');

const envPublicUrl = process.env.PUBLIC_URL;
const appDirectory = Fs.realpathSync(process.cwd());

const resolveApp = relativePath => Path.resolve(appDirectory, relativePath);
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
        envPublicUrl || (publicUrl ? Url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}
/**
  * 获取package.json文件中某个key下面的value
  * @method getPackageValue
  * @param {string} key 需要获取的key
  * @return {undefined|any} 如果没有该定义该key返回undefined，否则返回当前key的value
*/
function getPackageValue(key){
    const  Package=require(resolveApp('package.json'))
    return Package[key]!=null?Package[key]:undefined
}
/**
  * 根据name与ext拼接完整的文件名称
  * @method 名称
  * @for JJTool
  * @param {string} name 文件名
  * @param {string} ext 文件类型
  * @return {string} 完整的文件名
*/
function fsToExist(name,ext='js'){
    let pathexist=`${name}.${ext}`;
}
/**
  * 获取本地可用的Ip
  * @method getIP
  * @return {Array} 返回可用本地IP
*/
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
/**
  * 根据输入的端口打开浏览器
  * @method openBrowser
  * @param {number} prot 描述
*/
function openBrowser(prot) {
    switch (process.platform) {
        //mac系统使用 一下命令打开url在浏览器
        case "darwin":
            Cp.exec(`open http://localhost:${prot}`);
            break;
        //win系统使用 一下命令打开url在浏览器
        case "win32":
            Cp.exec(`start http://localhost:${prot}`);
            break;
        // 默认mac系统
        default:
            Cp.exec(`open http://localhost:${prot}`);
    }
}
module.exports={resolveApp,getServedPath,getPackageValue,fsToExist,getIP,openBrowser}