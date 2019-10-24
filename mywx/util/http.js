import {config} from '../config.js'

const tips={
    1:'出错误了',
    1005:'appkey无效',
    3000:'期刊不存在'
}
class HTTP
{
    request(params){
        if(!params.method){
            params.method="GET"
        }
        wx.request({
            url:config.api_base_url+params.url,
            method:params.method,
            data:params.data,
            header:{
                'content-type':'application/json',
                'appKey':config.appKey
            },
            success:(res)=>{
                let code=res.statusCode.toString();
                if(code.startsWith("2")){
                    params.success && params.success(res)
                }else{
                    let error_code=res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail:(res)=>{
                this._show_error(1)
            }
        })
    }
    _show_error(error_code){
        if(!error_code){
            error_code=1
        }
       wx.showToast({
           title:tips[error_code],
            icon:'none',
            duration:2000
       }) 
    }
}

export {HTTP};