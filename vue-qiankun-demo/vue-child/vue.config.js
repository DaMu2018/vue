// vue.config.js
const path = require('path');
const {name} = require('./package')
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port:8081,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
      output:{
          library:`${name}`,
          libraryTarget:'umd',
          jsonpFunction:`webpackJsonp_${name}`
      }
    }
}