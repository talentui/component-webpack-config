const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        use: ["css-loader", "sass-loader"]
    })
};
