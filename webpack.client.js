const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
		client: './client.js',
	},
  output: {
    filename: 'client.[contenthash:8].js',
		chunkFilename: 'chunk.[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/assets/'
  },
	devServer: {
		hot: true,
	},
	devtool: isProduction ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.scss$/,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
			{
        /* Fonts and Images */
        test: /\.(png|gif|jpg|jpeg|webp|svg|mp4|mov|webm|ttf|eot|svg|otf|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
				generator: {
          filename: '[name]-[contenthash:8][ext]', // Keep original filenames
        },
			},
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash:8].css'
    }),
		new WebpackManifestPlugin({
      fileName: path.resolve(__dirname, 'build/assets-manifest.json'), // Generates a JSON file with mappings
    }),
		new LoadablePlugin({ filename: 'loadable-stats.json' }),
		new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public/favicon.png'), to: "" },
				{ from: path.resolve(__dirname, 'public/robots.txt'), to: "" },
				{ from: path.resolve(__dirname, 'public/emailer/1_logo.svg'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/2_Pattern.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/3_astro_1.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/4_Pattern_footer.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/5_facebook2x.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/6_twitter2x.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/7_linkedin2x.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/9_Beefree-logo.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/8_instagram2x.png'), to: "emailer" }
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
  },
	optimization: {
    minimizer: [
      "...",
    ],
  },
};
