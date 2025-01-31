const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env={}, argv={}) => {
    return {
        entry: "./src/index.tsx",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index_bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader",
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: ["file-loader",
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: argv.mode === 'development',
                            },
                        }]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
            new CleanWebpackPlugin(),
            argv.mode === "development"
            ? new HtmlWebpackPlugin({
                template: "./public/index.html"
            })
                : null,
        ].filter(plugin => !!plugin)
    };
}