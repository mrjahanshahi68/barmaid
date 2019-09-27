var path=require('path');//for handling file path
const webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');//for handling html template.this package add bundle.js in your html page as script tag
var HtmlWebpackPluginConfig=new HtmlWebpackPlugin({
    template:path.resolve(__dirname,'src/index.html')
});

module.exports={
    entry:path.resolve(__dirname,'src/index.js'),//main js path file
    output:{//for build -
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.(js|jsx|ts|tsx)$/,//regex like as selector for find which file
                use:'babel-loader',//understand webpack after find file,use which loader to compile
                exclude:/node_modules/ //for decrease domain of scaning js file for compile
            },
            {
                test:/\.(css|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.tsx?$/,
                include: /src/,
                use: 'awesome-typescript-loader?silent=true'
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    plugins:[HtmlWebpackPluginConfig,new webpack.HotModuleReplacementPlugin()],//for webpack plugin -all of plugin is object and must be new then add object to array
};


