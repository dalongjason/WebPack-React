/**
 *  Created by hu on 2019-04-22.
 **/
const Jsx = require('./jsx');
const Tsx = require('./tsx');
const Css = require('./css');
const Less= require('./less');
const Img = require('./img');
const File= require('./file');


module.exports=(mode=true,project='')=>{
    //mode 如果没有传人默认为生成环境
    return [Jsx(mode,project),Tsx(mode,project),Css(mode,project),Less(mode,project),Img(mode,project),File(mode,project)]
}