module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            assets: './assets',
            src: './src',
            'test-utils': './test-utils'
          }
        }
      ],
      // the Reanimated plugin has to be the last item in the plugins array
      'react-native-reanimated/plugin'
    ],
    presets: ['babel-preset-expo']
  }
}
