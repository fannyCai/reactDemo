module.exports = {
    entry: "./src/js/index.js",
    output: {
        path:"/build/",
        filename: "bundle.js"
      
    },
    devServer: {
        inline: true,
      
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};