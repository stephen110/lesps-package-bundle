var webpack = require("webpack");

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
            {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // })
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
