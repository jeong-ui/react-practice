const path = require('path');

module.exports = {
  name : 'work-relay-setting',
  mode : 'development',
  devtool : 'eval',
  //확장자 설정
  resolve : {
    extensions : ['.js','.jsx']
  },
  
  //입력
  entry : {
    //app: ['./client.jsx' , './src/practice/workRelay/WorkRelay.jsx'],
    app: ['./client'],  //이미 client 에서 호출하고 있기에 제외함 , resolve로 인한 확장자 제외
  },

  module :{
    rules : [{
        test : /\.jsx?/,
        loader : 'babel-loader',
        options : {
            presets : ['@babel/preset-env','@babel/preset-react'],
            plugins : ['@babel/plugin-proposal-class-properties']
        },
    }],
  },
  //출력
  output : {
    path : path.join(__dirname,'dist'),
    filename : 'app.js'
  },
};