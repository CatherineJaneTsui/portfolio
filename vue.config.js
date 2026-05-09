const { defineConfig } = require('@vue/cli-service')
const os = require('os')
const path = require('path')

module.exports = defineConfig({
  publicPath: '/portfolio/',
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap(options => ({
        ...options,
        cacheDirectory: path.join(os.tmpdir(), 'babel-loader-cache'),
      }))
  },
})
