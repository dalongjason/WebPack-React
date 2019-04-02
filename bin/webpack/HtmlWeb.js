
const HtmlWeb={
    template: "./template/index.tpl",
    favicon:'',
    hash:true,
    chunksSortMode: 'none',
    minify:{
        removeComments:true,//删除注释
        collapseWhitespace:true,//折叠有助于文档树中文本节点的空白区域
        collapseInlineTagWhitespace:true,//折叠时不要在元素之间留下任何空格
    },
    xhtml:true
}

module.exports=HtmlWeb;