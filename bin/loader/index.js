/**
 *  Created by hu on 2019-04-22.
 **/
const Jsx = require('./jsx');
const Tsx = require('./tsx');
const Css = require('./css');
const Less= require('./less');
const Img = require('./img');
const File= require('./file');

/**
  * 编译插件
  * @method 名称
  * @for Webpack.module.rules
  * @param {boolean} mode 当前是否是生产环境
  * @param {string} project 当前的项目
  * @param {boolean} resourcepath 是否是相对路径
  * @return {类型} 数组形式返回编译插件
*/
module.exports=(mode=true,project='',resourcepath=false)=>{
    //mode 如果没有传人默认为生成环境
    return [Jsx(mode,project,resourcepath),Tsx(mode,project,resourcepath),Css(mode,project,resourcepath),Less(mode,project,resourcepath),Img(mode,project,resourcepath),File(mode,project,resourcepath)]
}