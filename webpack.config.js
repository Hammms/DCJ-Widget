const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

// TODO See TODO in README.md

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/js/main.js',
  output: {
    filename: 'widget.js',
    path: __dirname + '/dist',
    clean: true,
    // When using the lasy loading of components, we 
    // can set the publicPath based on the NODE_ENV/Webpack Mode
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? 'https://cdn.deathcarejobs.com/w/'
    //   : '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src/js/'),
      'Components': path.resolve(__dirname, '/src/js/components/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
