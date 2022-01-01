module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src',
            'test-utils': './test-utils'
          }
        }
      ]
    ],
    presets: ['babel-preset-expo']
  }
}
