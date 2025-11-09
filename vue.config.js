const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // Esto indica que los archivos se servirán desde la raíz
  publicPath: './',

  // Opcional: cambiar la carpeta de salida del build
  // outputDir: 'dist', // por defecto es 'dist'
})
