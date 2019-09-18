const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = 8889;

module.exports =  {
    entry: {
        index: path.join(__dirname, './src/index.js'),
        vendor: ['react', 'react-dom', 'echarts']

    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        historyApiFallback: true,//spa不跳转,history模式的路由需要true
        host: 'localhost',
        port: port,
        // hot:true,
        inline: true,//实时刷新
        compress: true,//Enable gzip compression for everything served
        overlay: true, //Shows a full-screen overlay in the browser
        stats: "errors-only",//To show only errors in your bundle
        open: true, //When open is enabled, the dev server will open the browser.
    },
    resolve: {
        alias: {
            common: path.join(__dirname, './src/common'),
            components: path.join(__dirname, './src/components')
        },
        extensions: [".js", ".jsx", '.ts', '.tsx', ".json"],
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "echarts": 'echarts'
    // },
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
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
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
        }
    },
    plugins: [
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
        })
    ],
};