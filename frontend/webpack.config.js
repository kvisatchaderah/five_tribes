//
// imports
//

const html_webpack_plugin = require('html-webpack-plugin')
const { VueLoaderPlugin: vue_loader_plugin } = require('vue-loader')
const path = require('path')
const dist_dir = path.resolve(__dirname, '../public')

//
// helpers
//

// entry
const get_entry = () => {
  return {
    main: __dirname + '/src/main.js',
  }
}

// get_rules
const get_rules = (dev) => {
  rules = [
    // vue
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },

    // js
    {
      test: /\.(mjs|js)$/i,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },

    // sass
    {
      test: /\.sass$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev ? true : false,
            sassOptions: {
              indentedSyntax: true,
            },
          },
        },
      ],
    },

    // scss
    {
      test: /\.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        'sass-loader',
      ],
    },

    // files
    {
      test: /\.(png|jpg|webp)$/i,
      type: 'asset/resource',
    },
  ]

  return rules
}

// plugins
const get_plugins = () => {
  return [
    new html_webpack_plugin({
      template: __dirname + '/src/index.html',
    }),
    new vue_loader_plugin(),
  ]
}

// serve
const get_serve = (serve) => {
  return serve
    ? {
        open: {
          app: {
            name: 'firefox Developer Edition',
            arguments: ['--new-tab'],
          },
        },
        hot: false,
        port: 8080,
      }
    : undefined
}

// alias
const get_alias = () => {
  return {
    '@consts': __dirname + '/src/assets/consts/__bunddle.js',
    '@helpers': __dirname + '/src/assets/helpers/__bunddle.js',

    '@styles': __dirname + '/src/styles',

    '@uis': __dirname + '/src/uis/__bunddle.js',
    '@components': __dirname + '/src/components/__bunddle.js',
    '@views': __dirname + '/src/views/__bunddle.js',

    '@composables': __dirname + '/src/composables/__bunddle.js',
    '@stores': __dirname + '/src/stores/__bunddle.js',
  }
}

// output
const get_output = () => {
  return {
    filename: '[name].js',
    clean: true,
    path: dist_dir,
    assetModuleFilename: '[name][ext]',
  }
}

//
// exports
//

module.exports = ({ dev, serve }) => {
  return {
    mode: dev ? 'development' : 'production',
    target: ['browserslist'],
    devtool: dev ? 'eval-source-map' : undefined,
    devServer: get_serve(serve),
    entry: get_entry(),
    output: get_output(),
    resolve: {
      extensions: ['.vue', '.js'],
      alias: get_alias(),
    },
    module: {
      rules: get_rules(dev),
    },
    plugins: get_plugins(),
  }
}
