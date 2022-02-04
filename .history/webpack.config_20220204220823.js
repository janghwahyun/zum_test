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
    // client.jsx에서 InstallTest를 불러오고 있기 때문에,
    // InstallTest는 따로 적어주지 않아도 된다. 웹팩이 파악함.
  },

  module: {
	  rules: [{
		  test: /\.jsx?/,
		  loader : ''babel-loader', ''babel-loader',
		  options: {
			  resets: ['@babel/preset-env', '@babel/preset-env],
		  },
	  }]
  },

  output: {
    path: path.join(__dirname, 'dist'), //  '__dirname'은 현재폴더라는 뜻, 즉 현재 폴더의 dist 경로라는 뜻
    filename: 'app.js',
  },
};
