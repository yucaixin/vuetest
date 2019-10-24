
import {HTTP} from '../util/http-p.js'

class KeyWordModel extends HTTP{
    key='q'
    maxLength=10
    getHistory(){
        const word= wx.getStorageSync(this.key)
        return !word?[]:word 
    }
    search(start,q){
        return this.request({
          url:'book/search?summary=1',
          data:{
            q:q,
            start:start
          }
        })
      }
    getHot(){
        return this.request({
            url:'/book/hot_keyword'
        })
    }

   addToHistory(keyword){
       let words=this.getHistory()
       const has=words.includes(keyword)
       if(!has){
            const lenght=words.lenght
            if(lenght>=this.maxLength){
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync(this.key,words) 
       }
        
    }
}

export {KeyWordModel}