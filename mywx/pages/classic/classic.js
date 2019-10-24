// pages/classic/classic.js
import {Classic} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
let classic=new Classic();
let likeModel=new LikeModel();
Page({
  /**
   * 页面的初始数据
   */ 
  data: {
      first:false,
      latest:true,
      likeCount:0,
      likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classic.getLatest((res)=>{
      this.setData({
        classic:res.data,
        likeCount:res.data.fav_nums,
        likeStatus:res.data.like_status
      })
    });
  },
  onLike:function(event){
    let behavior=event.detail.behavior
   likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
  },
  onNext:function(){
    this._updateData("next");
  },
  _updateData(nextorPrev){
    let index=this.data.classic.index
    classic.getClassic(index,nextorPrev,(res)=>{
      this._getLikeStatus(res.data.id,res.data.type)
      this.setData({
        classic:res.data,
        latest:classic.isLatest(res.data.index),
        first:classic.isFirst(res.data.index)
      })
    })
  },
  _getLikeStatus:function(artID,category){
    likeModel.getClassicLikeStatus(artID,category,(res)=>{
      this.setData({
        likeCount:res.data.fav_nums,
        likeStatus:res.data.like_status
      })
    })
  },
  onPrev:function(){
    this._updateData("previous")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})