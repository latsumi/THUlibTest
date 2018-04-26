// pages/me/manHourView.js
var util = require('../../utils/util.js');
var http = require('../../utils/http')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    descs: '以上工时仅供参考，与最终发布工时可能有偏差，最终解释权归坤宝所有',
    listData: [
      { name: '', key: '姓名', value: '' },
      { name: '', key: '学号', value: '' },
      { name: '', key: '本周总工时', value: '' },
      { name: '', key: '本周替班次数', value: '' },
      { name: '', key: '本周负责班数', value: '' },
      { name: '', key: '上周总工时', value: '' },
      { name: '', key: '上周替班次数', value: '' },
      { name: '', key: '上周负责班数', value: '' },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 500
    }),
      wx.setNavigationBarTitle({//动态设置当行栏标题
        title: '工时查看'
      })
    this.setData({
      openId: app.globalData.userInfo.openId
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