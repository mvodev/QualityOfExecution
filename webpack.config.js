const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'scripts.js'
	},
  module: {
		rules: [{
			test:/\.(s*)css$/,
			use: [
				miniCss.loader,
				'css-loader',
				'sass-loader',
			]
		},
    {
      test: /\.pug$/,
      use: ["pug-loader"],
    },
  ]
	},
	plugins: [
		new miniCss({
			filename: './style.css',
		}),
    new HTMLWebpackPlugin(
      {
        template: './index.pug'
      }
    ),
		new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon'),
          to: path.resolve(__dirname, 'docs/favicon')
        },
      ]
    }),
  ]
};