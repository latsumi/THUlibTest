// pages/toWork/bullList.js
var config = require('../../../config')
var http = require('../../../utils/http')
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    wx.setNavigationBarTitle({//动态设置当行栏标题
      title: "公告列表"
    })
    var that = this;
    http.GET({
      url: "listNoticeInfo",
      data: '',
      success: function (res) {
        that.setData({
          listData: res.data.data
        })
      },
      fail: function (res) { 
        util.showNetworkFail()
      }, complete: function (res) { },
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
    this.onLoad()
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
  
  },

  bindViewTap: function (event) {
    var index = event.target.dataset.index
    var item = this.data.listData[index]
    wx.navigateTo({
      url: 'editBull?title=' + item.title + '&id=' + item.id + '&detail=' + item.detail,
    })
  }
})