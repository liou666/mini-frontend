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
        path: path.resolve(__dirname, "./dist"),
        publicPath: "auto",
        uniqueName: 'AppOne', //避免多个webpack运行时产生的冲突
    },
    devServer: {
        port: 8001
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
            name: "AppOne", //模块的唯一标识
            filename: "remoteEntry.js", //提供出去的远程文件名
            exposes: {
                "exposeInit": "./src/exposeInit.js"
            },
            // remotes: {
            //     app2: "app2@http://localhost:8002/remoteEntry.js" //静态引入
            // },
            // shared: require("./package.json").dependencies
        })
    ]
}