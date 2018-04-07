// pages/toWork/editBull.js

var config = require('../../../config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    publisher: '',
    detail: '',
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 500
    }),
      wx.setNavigationBarTitle({//动态设置当行栏标题
        title: "公告编辑"
      })
    this.setData({//取值并更新数据和UI
      title: res.title,
      detail: res.detail,
      id: res.id
    })
  },
  delBull: function(e) {
    var that = this;
    wx.request({
      url: config.service.host + "/weapp/delNoticeInfo",
      data: {
        id: that.data.id
      },
      header: { 'content-type':'application/x-www-form-urlencoded'},

      method: 'GET',
      success: function (res) {
        wx:wx.redirectTo({
          url: 'bullList',
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  save: function(e){
    var that = this;
    wx.showToast({
      title: '正在保存',
      icon: 'loading',
      duration: 500
    }),
    wx.request({
      url: config.service.host + "/weapp/updateNoticeInfo",
      data: {
        title: e.detail.value.detail,
        id: that.data.id,
        datail: e.detail.value.detail,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },

      method: 'GET',
      success: function (res) {
        console.log(e.detail.value.detail)
        wx: wx.redirectTo({
          url: 'bullList',
        })
      },
      fail: function (res) { },
      complete: function (res) { },
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