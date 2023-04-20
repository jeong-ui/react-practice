const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'work-relay-setting',
  mode: 'development',
  devtool: 'eval',
  //확장자 설정
  resolve: {
    extensions: ['.js', '.jsx']
  },

  //입력
  entry: {
    //app: ['./client.jsx' , './src/practice/workRelay/WorkRelay.jsx'],
    app: ['./client'],  //이미 client 에서 호출하고 있기에 제외함 , resolve로 인한 확장자 제외
  },

  module: {
    rules: [
      {
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          //browsers 버전관리
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],  //browserslist option
            },
            debug: true,
          }],
          '@babel/preset-react',

        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel'
        ]

      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },

    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin()
  ],
  //출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist'
  },

  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname, 'src') },
    hot: true,
  },
};