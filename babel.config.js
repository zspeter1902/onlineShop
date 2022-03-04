module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        // 'style': false
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
