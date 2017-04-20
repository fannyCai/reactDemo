var path = require('path');

module.exports = {
  entry:'./js/index.js',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'build'),
	publicPath: '/assets/'
  },
 devServer: {
	inline: true,
	watchOptions: {
        poll: true
    }
},

  module: {
		loaders: [
		   { 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {presets: ['es2015','react']} 
			}
		]
	}
};