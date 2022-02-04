const InstallTest = require('./InstallTest');
// react, react-dom 불러옴
const React = require('react');
const ReactDom = require('react-dom');

// index.html 안에 있는 #root(#root를 가지고 있는 DOM)에 installTest component를 render
ReactDom.render(<InstallTest />, document.querySelector('#root'));
