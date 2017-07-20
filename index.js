const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(options = {}) {
    //读取package.json中的name
    let { entry, name, root, compress } = options;
    if (!entry) {
        console.error("无Entry不打包");
        process.exit(1);
    }
    const { npm_package_name } = process.env;

    if (!name) {
        if (!npm_package_name)
            console.error("你准备给你的组件取个什么名字呢，请设置package.json中的name字段，取个美美的名字吧");
        else name = require("./utils/get-package-name.js")(npm_package_name);
    }

    return {
        entry: options.entry,
        output: {
            path: path.resolve(root, "dist"),
            filename: "index.js",
            library: name,
            libraryTarget: "umd"
        },
        externals: [require("webpack-node-externals")()],
        module: {
            rules: require("./rules/index.js")
        },
        plugins: [
            new ExtractTextPlugin({
                filename: "style.css"
            }),
            ...(compress
                ? [
                      new (require("webpack")).optimize.UglifyJsPlugin({
                          compress: {
                              warnings: false
                          },
                          sourceMap: true,
                          minimize: true
                      })
                  ]
                : [])
        ]
    };
};
