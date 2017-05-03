module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react','stage-0']
            }
          }
        ]
      },
      
      {
        test: /\.css$/,
        //exclude: /(node_modules)/,
        loader: "style!css?modules"
      },
    ]
  }
};