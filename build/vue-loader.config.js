module.exports = (isDev) => {
  return {
    preserveWhitepace:true,
    extractCSS: !isDev ,
    cssModules:{},
    hotReload:false
  }
}