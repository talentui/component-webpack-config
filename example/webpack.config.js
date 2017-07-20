const path = require('path');
module.exports = require('../index.js')({
    root: path.resolve(__dirname),
    entry: './src/index.js'
})