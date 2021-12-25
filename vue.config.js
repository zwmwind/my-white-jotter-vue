module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8443',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
