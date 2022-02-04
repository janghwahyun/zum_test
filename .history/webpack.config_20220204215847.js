const path = require('path');

module.exports = {
  name: 'ZUM-TEST', // 프로젝트이름
  mode: 'development', // 모드설정, 실서버용은 production
  devtool: 'eval', // 속도 빠르게
  resolve: {
    extensions: ['.js', 'jsx'], // 번들링 할 확장자 모음
  },

  entry: {
    app: ['./client'],
  },

  output: {
    path: path.join(__dirname, 'dist'),

    filename: 'app.js',
  },
};
