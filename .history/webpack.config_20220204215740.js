const path = require('path');

module.exports = {
  name: 'ZUM-TEST',
  mode: 'development',
  devtool: 'eval',
  resolve: {
	  extensions : ['.js', 'jsx'],
  },

  entry : {
	  app: ['./client'],
  },

  output: {
	path : path.join(__dirname, 'dist'),

	filename: 'app.js'
  };
  
};

