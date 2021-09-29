/**
 * @type {import('@vue/cli-service/types/ProjectOptions').ProjectOptions}
 */
module.exports = {
  lintOnSave: false,
  css: {
    scss: {
      implementation: require('sass'),
      sassOptions: {
        fiber: false,
      },
    },
    sourceMap: true,
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
}
