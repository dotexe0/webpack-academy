const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/build")
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$/,
                use: [
                    {
                        loader: "file-loader"
                    },
                    // {
                    //     loader: "image-webpack-loader"
                    // }
                ]
            }
            // {
            //     test: /\.js$/,
            //     use: "babel-loader"
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         },
            //     ]
            // },
            // {
            //     test: /\.jpeg$/,
            //     use: [
            //         {loader: "url-loader", options: {
            //             limit: 10000
            //         }}
            //     ]
            // }
        ]
    }
}