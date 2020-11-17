module.exports ={
    devServer: {
        // development server port 8000
        port: 8080,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
          '/api/ylwz': {
            target: 'http://ylwz.demo.cddpi.com:8081',
            ws: false,
            changeOrigin: true,
            pathRewrite: {
              '^/api/ylwz': '/api/ylwz'
            }
          }
        }
      },
}