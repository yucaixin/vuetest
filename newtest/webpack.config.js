
const path=require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin=require('html-webpack-plugin')//运行HTML的
const ExtractPlugin=require('extract-text-webpack-plugin')//大包css的plugin
const webpack=require('webpack')
const  isDev=process.env.NODE_ENV==='development'//development
const config={
    target:'web',   
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin(),
        new webpack.DefinePlugin({
            'process.nev':{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        })
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                loader:'css-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
              },
{
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                loader:'url-loader',
                options:{
                    limit:1024,
                    name:'[name]-aaa.[ext]'
                }
            }
        ]
    }
}

if(isDev)
{
    config.module.rules.push({
        test:/\.styl$/,
        use:['style-loader','css-loader',{
            loader:'postcss-loader',
            options:{
                sourceMap:true
            } 
        },'stylus-loader',
       ]
    })
    config.devtool='#cheap-module-eval-source-map'
    config.devServer={
        port:8000,
        host:'0.0.0.0',
        overlay:{
            error:true,
        },
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{
    config.entry={
        app:path.join(__dirname,'index.js'),
        vender:['vue']
    }
    config.output.filename='[name].[chunkhash:8].js'
    config.module.rules.push({
        test:/\.styl$/,
        use:ExtractPlugin.extract({
            fallback:'style-loader',
            use:[
                
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true,
                    }
                },
                'stylus-loader'
            ]
        })
    })
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vender'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })
    )
}
module.exports=config