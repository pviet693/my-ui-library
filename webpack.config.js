const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.ts",
        button: "./src/components/Button.tsx",
        input: "./src/components/Input.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        globalObject: "this"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        open: true
    },
    mode: "production"
};
