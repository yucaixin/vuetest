// components/search/index.js

import {KeyWordModel} from '../../models/keyword.js'
import {paginnationBev} from '../behaviors/paginnation.js'
let keyWordModel =new KeyWordModel();
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[paginnationBev],
  properties: {
      more:{
        type:String,
        observer:'_load_more'
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWord:[],
    hotWords:[],

    finished:false,
    q:'',
    loading:false,
    loadingCenter:false
  },
  attached(){
    const historyWord=keyWordModel.getHistory()
    const hotWord=keyWordModel.getHot()
    hotWord.then(res=>{
      this.setData({
        hotWords:res.hot,
        
      })
    })
    this.setData({
      historyWord
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _load_more(){
        if(!this.data.q){
          return
        }
        if(!this._isLocked){
          return
        }else{
          const length =this.data.dataArray.length;
          this.setData({
            loading:true
          })
          keyWordModel.search(this.getCurrentStart(),this.data.q).then(res=>{
                this.setMoreData(res.books)
                this.setData({
                  loading:false
                })
          },()=>{
            this.setData({
              loading:false
            })
          })
        }
      
        
    },
    _isLocked(){
      return this.data.loading?true:false
    },
    onCancel(event){
      this.initialize()
      this.triggerEvent('cancel',{},{})
    },
    onDelete(event){
      this.initialize()
        this.setData({
          finished:false
        })
    },
    onConfirm(event)
    {
      const q =event.detail.value||event.detail.text
      this.setData({
        finished:true,
        q:q,
        loadingCenter:true
      })
      
      keyWordModel.search(0,q).then(res=>{
        this.setMoreData(res.books)
        this.setTotal(res.total)
        keyWordModel.addToHistory(q)
        this.setData({
          loadingCenter:false
        })
      })
    }
  }
})
