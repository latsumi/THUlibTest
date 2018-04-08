//index.js
var config = require('../../config')
var http = require('../../utils/http')
var util = require('../../utils/util')

const app = getApp()

Page({
  data: {
    imgUrls:[
      "../../image/home_lib01.jpg",
      "../../image/home_lib02.jpg",
      "../../image/home_lib03.jpg",
    ],
    listData: [],
    userInfo: {},
    hasUserInfo: false,

    menu:[
      { menuImage: "../../image/contacts_socialScience.png", descs: "通讯录(社科)" },
      { menuImage: "../../image/contacts_science&tech.png", descs: "通讯录(科技)" }, 
      { menuImage: "../../image/dutyForm_socialScience.png", descs: "排班表(社科)"}, 
      { menuImage: "../../image/dutyForm_science&tech.png", descs: "排班表(科技)" },
    ]
  },

  onLoad: function () {
    var that = this;
    http.GET({
      url: 'listNoticeInfo',
      data: {},
      success: function(res){
        that.setData({
          listData: res.data.data
        })
      },
      fail: function (res){}, complete: function (res){},
    })
  },

  bindMenuTap: function(event) {
    var index = event.target.dataset.index
    if (app.globalData.authority < 1) {
      util.jumpToLogin('../me/me')
    }
    else{
      wx.navigateTo({
        url: '../info/dutyForm',
      })
    }
  },
  bindBullTap: function(event) {
    console.log(this.data.listData)
    var index = event.target.dataset.index
    var item = this.data.listData[index]
    wx.navigateTo({
      url: '../info/bulletinDetail?title=' + item.title + '&detail=' + item.detail,
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;
    http.GET({
      url: 'listNoticeInfo',
      data: {},
      success: function (res) {
        that.setData({
          listData: res.data.data
        })
      },
      fail: function (res) { }, complete: function (res) { },
    })
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
    
  },
  
})
