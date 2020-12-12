const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.js')(null, {
  mode: 'development',
});

const port = parseInt(process.env.APP_HTTP_PORT || 0, 10) || 8080;
const host = process.env.APP_HOST || 'localhost';

const compiler = webpack(webpackConfig);
const app = express();

//
// Expose webpack
//
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

//
// Setup proxy to http server
//

app.use('*', createProxyMiddleware({
  target: 'http://' + host + ':' + port,
  changeOrigin: true,
}));

//
// Start webpack dev server
//
app.listen(
  port + 1,
  () => {
    console.log('*******************************************************');
    console.log('Webpack Dev Server started!');
    console.log('Listening: http://' + host + ':' + (port + 1));
    console.log('*******************************************************');
  },
);