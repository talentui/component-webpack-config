module.exports = {
    test: /\.(jsx?)$/,
    exclude: /node_modules\/(?!@beisen\/talent-ui)/, //本正则由张跃同学提供
    loader: "babel-loader",
    options: {
        babelrc: false,
        cacheDirectory: true,
        presets: [
            ['env', {
                targets: {
                    browsers: 'ie >= 9'
                }
            }],
            'react',
            'stage-0'
        ],
        plugins: ['transform-decorators-legacy']

    }
};
