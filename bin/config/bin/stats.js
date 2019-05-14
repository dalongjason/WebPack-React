module.exports={
    colors: {green: '\u001b[32m',}, //控制台输出颜色
    all: undefined,// 未定义选项时，stats 选项的备用值(fallback value)（优先级高于 webpack 本地默认值）
    assets: false,// 添加资源信息
    builtAt: false,// 添加构建日期和构建时间信息
    cached: false,// 添加缓存（但未构建）模块的信息
    cachedAssets: false,// 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
    children: true,// 添加 children 信息
    chunks: false, // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
    chunkGroups: true,// 添加 namedChunkGroups 信息
    chunkModules: false,// 将构建模块信息添加到 chunk 信息
    chunkOrigins: false,// 添加 chunk 和 chunk merge 来源的信息
    chunksSort: "!field",// 按指定的字段，对 chunk 进行排序,默认是按照 `id` 排序。'name', 'size', 'chunks', 'failed', 'issuer'
    context: "../src/",// 用于缩短 request 的上下文目录
    depth: false,// 显示每个模块到入口起点的距离(distance)
    entrypoints: false,// 通过对应的 bundle 显示入口起点
    env: false,// 添加 --env information
    errors: true,// 添加错误信息
    errorDetails: true,// 添加错误的详细信息（就像解析日志一样）
    warnings: true, //添加警告
    version: false, // 添加 webpack 版本信息
    timings: false, // 添加时间信息
    source: false, // 添加模块的源码
    reasons: false,// 添加模块被引入的原因
    warningsFilter:false, // 过滤警告显示
    publicPath: true,// 添加 public path 的信息
    providedExports: true,// 显示模块的导出
    performance: true, // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
    moduleTrace: true, // 显示警告/错误的依赖和来源（从 webpack 2.5.0 开始）
    modules: true, //添加构建模块信息
    maxModules: 15, // 设置要显示的模块的最大数量
    hash: true, // 添加 compilation 的哈希值
    exclude: "filter", //查看 excludeModules
    excludeModules: "filter", //将模块显示在 stats 中的情况排除
};