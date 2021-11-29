const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    ModuleFederationPlugin
} = require("webpack").container
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        port: 8002
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new ModuleFederationPlugin({
            filename: "remoteEntry.js",
            name: "app2",
            exposes: {
                "./Header": "./src/components/Header.vue"
            },
            // shared: require("./package.json").dependencies,
        })
    ]
}