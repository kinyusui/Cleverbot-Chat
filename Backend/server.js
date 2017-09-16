const express = require('express');
const router = require('./router.js');
const db = require('./database.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const bodyparser = require('body-parser');
const app = express();
 
const compiler = webpack(webpackConfig);
app.use(express.static(__dirname + `/../dist`));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
app.use('/ChatBot', bodyparser.json());
app.use('/', router);
 
const server = app.listen(3000);


// const express = require('express');

// const db = require('./database.js');
// const bodyparser = require('body-parser');

// //so is app like the server or what?

// let app = express();
// //app.use( `/ChatBot`, bodyparser.urlencoded({ extended: true }));

// app.listen(3000);
