/**
 *  Created by hu on 2019-04-19.
 *  Updated for Webpack 5
 **/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const Loader = require('./loader');
const Paths = require('./config/paths');
const Server = require('./config/server');
const Optimize = require('./config/optimize');
const Plugins = require('./plugins/index');

module.exports = (env, argv) => {
    const isEnvDevelopment = argv.mode === 'development';
    const isEnvProduction = argv.mode === 'production';
    const project = env && env.project;
    const prot = env && env.prot;
    const environment = env && env.environment;

    process.env.NODE_ENV = isEnvDevelopment ? 'development' : 'production';
    process.env.BABEL_ENV = isEnvDevelopment ? 'development' : 'production';
    const publicPath = isEnvProduction ? Paths.servedPath : isEnvDevelopment && '/';
    const shouldUseRelativeAssetPaths = publicPath === './';
    const AppProject = project !== undefined && project.length > 0 && project;

    if (!AppProject) {
        console.error('\u001B[41;37m ERROR \u001B[0;31m 命令中 --project 参数是必须的 \u001B[0m');
        process.exit();
    }

    const WebpackServer = isEnvDevelopment ? { devServer: Server(prot, Paths.servedPath) } : {};
    const devtool = isEnvDevelopment ? 'eval-source-map' : 'source-map';

    const appEntry = (arr) => {
        let appEntry = {};
        arr.map(({ keys = '', pathIndex = '' }) => {
            if (String(keys) === String(AppProject)) {
                appEntry[keys] = pathIndex;
            }
        });
        if (Object.keys(appEntry).length <= 0) {
            console.error(`\u001B[41;37m ERROR \u001B[0;31m 配置中没有找到入口名称为："${AppProject}" 入口!! \u001B[0m`);
            process.exit();
        }
        return appEntry;
    };

    const appHtml = (arr) => {
        let appHtml = [];
        arr.map(({ keys = '', title = '', chunks = [] }) => {
            if (String(keys) === String(AppProject)) {
                appHtml.push(new HtmlWebpackPlugin(Object.assign({}, {
                    template: Paths.appHtml,
                    favicon: Paths.appIcon,
                    hash: true,
                    chunksSortMode: 'none',
                    title: title,
                    filename: `./index.html`,
                    chunks: [...chunks, 'vendors'],
                    inject: true,
                    xhtml: true
                }, isEnvProduction ? {
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        collapseInlineTagWhitespace: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    }
                } : undefined)));
            }
        });
        if (appHtml.length <= 0) {
            console.error(`\u001B[41;37m ERROR \u001B[0;31m 配置中没有找到入口名称为："${AppProject}" 入口!! \u001B[0m`);
            process.exit();
        }
        return appHtml;
    };

    return {
        entry: appEntry(Paths.appEntry),
        output: {
            path: isEnvProduction ? `${Paths.appBuild}/${AppProject}` : undefined,
            pathinfo: isEnvDevelopment,
            filename: isEnvProduction ? `static/js/[name].[contenthash:8].js` : isEnvDevelopment && 'static/js/[name].js',
            chunkFilename: isEnvProduction ? `static/js/chunk/[name].[contenthash:8].bundle.js` : isEnvDevelopment && 'static/js/chunk/[name].bundle.js',
            publicPath: publicPath,
            clean: isEnvProduction,
            assetModuleFilename: 'static/media/[name].[hash][ext]',
        },
        mode: argv.mode,
        watch: true,
        bail: isEnvProduction,
        devtool: devtool,
        module: {
            rules: [
                ...Loader(isEnvProduction, AppProject, shouldUseRelativeAssetPaths)
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
            alias: {
                '@': Paths.appSrc,
            },
        },
        optimization: Optimize(isEnvProduction),
        ...WebpackServer,
        plugins: [
            ...appHtml(Paths.appEntry),
            new WebpackManifestPlugin({
                fileName: 'asset-manifest.json',
                publicPath: publicPath,
                generate: (seed, files) => {
                    const manifestFiles = files.reduce(function(manifest, file) {
                        manifest[file.name] = file.path;
                        return manifest;
                    }, seed);
                    return {
                        files: manifestFiles,
                    };
                },
            }),
            new MiniCssExtractPlugin({
                filename: isEnvProduction ? "static/css/[name].[contenthash:8].css" : isEnvDevelopment && "static/css/[name].css",
                chunkFilename: isEnvProduction ? "static/css/[id].[contenthash:8].css" : isEnvDevelopment && "static/css/[id].css"
            }),
            ...(Paths.appCopy.length > 0 ? [new CopyPlugin({ patterns: [...Paths.appCopy] })] : []),
            ...Plugins(isEnvProduction)
        ],
        performance: {
            hints: isEnvProduction ? "warning" : false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        cache: {
            type: 'filesystem',
            buildDependencies: {
                config: [__filename],
            },
        },
        experiments: {
            topLevelAwait: true,
        },
    }
};
