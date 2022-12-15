const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @use "sass:string";  
        @import "@/sass/_main.scss";
          
        `
        }
    }
}
})
    
