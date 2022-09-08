const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader", ]
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: 'assets/[name].[ext]',
                        output: 'assets',
                        useRelativePath: true,
                        publicPath: 'assets',
                    }
                }]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 5555,
        liveReload: true,
        open: true,
    },
    plugins: [new HTMLWebpackPlugin({
        filename: "index.html",
        template: './index.html'
    })]
}