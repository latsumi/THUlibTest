// pages/toWork/addBull.js

var config = require('../../../config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    detail: ''
  },

  save: function(e){
    console.log(e.detail.value)
    var that = this;
    wx.request({
      url: config.service.host + "/weapp/writeNoticeInfo",
      data: {
        title: e.detail.value.title,
        detail: e.detail.value.detail,
      },
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'GET',
      success: function(res) {
        
        console.log(res)
      },
      fail: function(res) {
        console.log("发布失败")
      },
      complete: function(res) {},
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({//动态设置当行栏标题
      title: "新建公告"
    })
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