const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = function (env, args) {
  const APP_ROOT_DIR = path.join(__dirname, '../..');
  const APP_SRC_DIR = path.join(APP_ROOT_DIR, 'src');
  const IS_RELEASE = args.mode === 'production';
  const IS_DEBUG = !IS_RELEASE;
  const NODE_ENV = IS_RELEASE ? 'production' : 'development';
  const BUILD_DIR = path.join(APP_ROOT_DIR, 'widgets');
  const TSCONFIG_FILE = path.join(APP_ROOT_DIR, 'tsconfig.json');

  return {
    output: {
      filename: 'floorplan3d/js/floorplan3d.js',
      path: BUILD_DIR,
      publicPath: '',
    },

    entry: [
      path.join(APP_ROOT_DIR, 'src/index.tsx'),
      IS_DEBUG && 'webpack-hot-middleware/client',
    ].filter((val) => !!val),

    mode: NODE_ENV,
    target: undefined,

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    devServer: IS_DEBUG ? {
      hot: true,
    } : undefined,


    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.join(APP_ROOT_DIR, 'src'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,

                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript"
                ],

                // presets: [
                //   [
                //     [
                //       "@babel/preset-env",
                //       {
                //         "useBuiltIns": "usage",
                //         "corejs": 3
                //       }
                //     ],
                //     "@babel/preset-react"
                //     // '@babel/preset-react',
                //     // '@babel/preset-env',
                //     // {
                //     //   modules: false,
                //     //   forceAllTransforms: false,
                //     //   useBuiltIns: false,
                //     //   targets: { browsers: '> 1%' },
                //     // },
                //   ],
                // ],

                plugins: [
                  ['@babel/plugin-transform-typescript', {
                    allowDeclareFields: true,
                  }],
                  ['@babel/plugin-proposal-decorators', { legacy: true }],
                  ['@babel/plugin-proposal-class-properties', { loose: true }],
                  '@babel/plugin-transform-runtime',
                  '@babel/plugin-transform-react-jsx',
                  '@babel/plugin-proposal-object-rest-spread',
                  '@babel/plugin-syntax-dynamic-import',
                  ['@emotion/babel-plugin',
                    IS_RELEASE
                      ? { hoist: true }
                      : { sourceMap: true, autoLabel: 'dev-only' },
                  ],
                ],
              },
            },
          ],
        },


      ],
    },


    plugins: [

      IS_DEBUG && new webpack.HotModuleReplacementPlugin(),

      !IS_RELEASE && new HtmlWebpackPlugin({
        template: path.join(APP_SRC_DIR, '/domain/widget/index.html'),
        filename: 'index.html'
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),


      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: TSCONFIG_FILE,
        }
        // tsconfig: TSCONFIG_FILE,
        // tslint: true,
      }),


    ].filter((val) => !!val),
  };
};