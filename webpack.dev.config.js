const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const root_path  = path.resolve(__dirname); // 项目根目录
const app_path   = path.resolve(root_path,'src'); // src目录
const entry_path = path.resolve(app_path,'index.jsx'); // 入口文件
const dist_path  = path.resolve(root_path,'bulid');// 打包环境目录

module.exports = {
	entry: entry_path,

	output: {
		filename: 'bundle.js',
		path: dist_path,
	},

	mode: 'development',

	// 模块查找规则
	resolve: {
		extensions: [".js",".jsx", ".json", ".css",'.json5']
	},

	// 配置DevServer
	devServer:{
		contentBase: '/build',
	},

	// 配置需要的loader
	module:{
		rules:[{
				test: /(\.jsx|\.js)$/,
	            use: ["babel-loader?presets[]=env,presets[]=react"],
	            exclude: /node_modules/
			},{
				test: /\.css$/,
				use: ["style-loader","css-loader"],
				exclude: /node_modules/
			},{
				test: /(\.png|\.jpg|\.gif)$/,
				use: ["file-loader"],
				exclude: /node_modules/
			},{
				test: /\.json5$/,
				use: ["json5-loader"],
				exclude: /node_modules/
			}
		]
	},

	// 配置需要的plugins
	plugins:[
		new HtmlWebpackPlugin({
            template: app_path + "/index.html"// 入口文件HTML
        }),
	]

}