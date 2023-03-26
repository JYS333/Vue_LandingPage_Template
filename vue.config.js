const { defineConfig } = require('@vue/cli-service');

let proxyTarget = 'https://itf-pshop.lining.com'; // test
// let proxyTarget = 'https://itf-pshop.lining.com'; // prod

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
