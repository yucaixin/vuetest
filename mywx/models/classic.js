import {HTTP} from '../util/http.js'


class Classic  extends HTTP{
    prefix = 'classic'
    getLatest(scallback){
        this.request({
            url:'classic/latest',
            success:(res)=>{
              scallback(res)
              this._setLatestIndex(res.data.index)
              let key=this._getKey(res.data.index)
              wx.setStorageSync(key,res)
            }
         })
    }
    getClassic(index,next0rPrev,scallback){
        let key=next0rPrev=='next'?this._getKey(index+1):this._getKey(index-1)
        let classic=wx.getStorageSync(key)
        if(!classic){
            this.request({
                url:`classic/${index}/${next0rPrev}`,
                success:(res)=>{
                wx.setStorageSync(this._getKey(res.data.index),res)
                  scallback(res)
                }
             })
        }else{
            scallback(classic)
        }
        
    }
    isFirst(index){

        return index==1?true:false;
    }
    isLatest(index){
        let latestIndex=this._getLatestIndex();
       
        return latestIndex==index?true:false
    }
    _setLatestIndex(index){
        wx.setStorageSync('latest',index)
    }
    _getLatestIndex(){
        let index= wx.getStorageSync('latest')
        return index;
    }
    _getKey(key){
        return this.prefix+'-'+key;
    }
}

export {Classic}