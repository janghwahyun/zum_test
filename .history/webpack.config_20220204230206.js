const path = require('path');

module.exports = {
  name: 'ZUM-TEST', // 프로젝트이름
  mode: 'development', // 모드설정, 실서버용은 production
  devtool: 'eval', // 속도 빠르게
  resolve: {
    extensions: ['.js', '.jsx'], // 번들링 할 확장자 모음
  },

  entry: {
    app: ['./client'],
    // client.jsx에서 InstallTest를 불러오고 있기 때문에,
    // InstallTest는 따로 적어주지 않아도 된다. 웹팩이 파악함.
  },

  module: {
    // 1.규칙을 정요할 파일들
    rules: [
      {
        test: /\.jsx?/, // 정규식 .js와 .jsx에 이 룰을 적용
        // 2. 어떤 규칙을?
        loader: 'babel-loader',
        // 위 파일들에 바벨을 적용해서, 사용자 브라우저에 맞춰 최신 문법을 옛문법으로 적용하겠다.

        // 3. 바벨의 옵션들
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'), //  '__dirname'은 현재폴더라는 뜻, 즉 현재 폴더의 dist 경로라는 뜻
    filename: 'app.js',
  },
};
