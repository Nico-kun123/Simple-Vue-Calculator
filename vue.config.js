module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Simple-Vue-Calculator/' : '/',
  build: {
    rollupOptions: {
      // Убедитесь, что расширения файлов, такие как SVG, не исключены
      exclude: ['**/*.svg']
    }
  }
}
