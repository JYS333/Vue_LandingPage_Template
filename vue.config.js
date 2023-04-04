const { defineConfig } = require('@vue/cli-service');

let proxyTarget = 'https://xxx.com'; // test
// let proxyTarget = 'https://xxx.com'; // prd

module.exports = defineConfig({
  transpileDependencies: true,
  // close eslint check
  lintOnSave: false,
  // proxy
  devServer: {
    host: 'localhost',
    // https: true, // allow https api porxy
    open: true,
    port: 3000,
    proxy: {
      "/api": {
        target: proxyTarget,
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true, // enable cross origin
        // ws: false,
      }
    }
  }
})
