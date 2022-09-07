const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: 'assets/[name].[ext]',
            //             output: 'assets',
            //             useRelativePath: true,
            //             publicPath: 'assets',
            //         }
            //     }]
            // }
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        filename: "index.html",
        template: './index.html'
    })]
}