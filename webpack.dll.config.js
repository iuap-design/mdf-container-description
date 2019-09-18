const path = require('path');
const webpack = require('webpack');
/**
 * Plugin that simplifies creation of HTML files to serve your bundles
 * npm i --save-dev html-webpack-plugin
 * @type {HtmlWebpackPlugin}
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');


/**
 * A webpack plugin to remove/clean your build folder(s) before building
 * npm i clean-webpack-plugin --save-dev
 * @type {CleanWebpackPlugin}
 */
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');


/**
 * 提取css到单独文件
 * npm install --save-dev mini-css-extract-plugin
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * css 压缩 会清除css中注释
 * npm install --save-dev optimize-css-assets-webpack-plugin
 */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


/**
 * js 压缩
 * npm install uglifyjs-webpack-plugin --save-dev
 */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const port = 8889;

module.exports =  {
    entry: {
        index: path.join(__dirname, './src/index.js'),
        vendor: ['react', 'react-dom', 'echarts']

    },
    output: {
      path: path.join(__dirname, 'dist'),
      
    //   filename: "[name].[hash].js",
      chunkFilename: "[name].js?[hash]"
    },
    mode: 'production',
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
    //     historyApiFallback: true,//spa不跳转,history模式的路由需要true
    //     host: 'localhost',
    //     port: port,
    //     // hot:true,
    //     inline: true,//实时刷新
    //     compress: true,//Enable gzip compression for everything served
    //     overlay: true, //Shows a full-screen overlay in the browser
    //     stats: "errors-only",//To show only errors in your bundle
    //     open: true, //When open is enabled, the dev server will open the browser.
    // },
    resolve: {
        alias: {
            common: path.join(__dirname, './src/common'),
            components: path.join(__dirname, './src/components')
        },
        extensions: [".js", ".jsx", '.ts', '.tsx', ".json"],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
                exclude: /(node_modules)/,
                loader: ['url-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                // include: origin,
                exclude: /(node_modules)/,
                loader:  ['url-loader']
            },
            {
                test: /\.(le|c)ss$/,
                // include: [...origin, 'node_modules'],
                exclude: /(node_modules)/,
                loaders: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "echarts": 'echarts'
    // },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 注意: priority属性
                // 其次: 打包业务中公共代码
                common: {
                  name: "common",
                  chunks: "all",
                  minSize: 1,
                  priority: 0
                },
                // 首先: 打包node_modules中的文件
                vendor: {
                  name: "vendor",
                  test: /[\\/]node_modules[\\/]/,
                  chunks: "all",
                  priority: 10
                }
              }
        },
        // minimize: true,
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        // new webpack.BannerPlugin('hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'),
        new webpack.BannerPlugin(`[filebase]\n${new Date()}\n`),
        new HtmlWebpackPlugin({//预览时使用path.join(__dirname, './example/index.js')
            template: path.resolve(__dirname, 'src', 'index.html'),//模板
            // filename: 'index.html',
            
            // // chunks: ['app'],
            // inject: false, //允许插件修改哪些内容，包括head与body
            // hash: true, //是否添加hash值
            // minify: { //压缩HTML文件
            //     removeComments: true,//移除HTML中的注释
            //     collapseWhitespace: true //删除空白符与换行符
            // },
            // chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none'
        }),

        //  /**
        //  * 打包HTML
        //  */
        // new HtmlWebpackPlugin({
        //     title: 'Output Management',
        //     /**
        //      * template 指定要打包的原文件
        //      */
        //     template: './online.html'
        // }),
        /**
         * 由 webpack 生成的文件或目录才能被 CleanWebpackPlugin 删除
         * 下面配置的是 打包前 需要被删除的目录
         */
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename: '[name].css',
            filename: "./css/[name].css?[hash]" ,
            // chunkFilename: '[id].css',
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        // new webpack.optimize.DedupePlugin(),

        /**
         *  提取SourceMap到独立文件
         */
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     // exclude: ['vendor.js']
        // })
    ],
};