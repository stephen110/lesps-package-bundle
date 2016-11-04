var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "lesps-bundle.js",
        libraryTarget: "umd",
        library: "lesps-bundle"
    },
    devtool: "source-map",
    externals: {
        "framework-core": {
            "amd": "framework-core"
        },
        "framework-controls": {
            "amd": "framework-controls"
        },
        "framework-home": {
            "amd": "framework-home"
        },
        "logger": {
            "amd": "logger"
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // })
        new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
