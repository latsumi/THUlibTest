// pages/me/me.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    menu:[
      { menuImage: "../../image/questionnaire.png", descs: "填写问卷" },
      { menuImage: "../../image/workingHours.png", descs: "工时查看" },
      { menuImage: "../../image/messageBox.png", descs: "留言箱" },
      { menuImage: "../../image/contactUs.png", descs: "联系我们" },
      { menuImage: "../../image/beMember.png", descs: "成为队员" },
      { menuImage: "../../image/beLeader.png", descs: "成为负责人" },
      { menuImage: "../../image/beAdmin.png", descs: "成为管理员" },
    ]

  },
  login: function () {
    if (this.data.logged) return

    util.showBusy('正在登录')
    var that = this

    // 调用登录接口
    qcloud.login({
      success(result) {
        //记得删下面的句子
        app.globalData.authority = 1
        console.log(app.globalData.authority)
        if (result) {
          util.showSuccess('登录成功')
          that.setData({
            userInfo: result,
            logged: true,
          })
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              util.showSuccess('登录成功')
              that.setData({
                userInfo: result.data.data,
                logged: true
              })
            },

            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  bindMenuTap: function (event) {
    var index = event.target.dataset.index
    switch(index)
    {
      case 0:
      {
        if(app.globalData.authority<1)
        {
          util.showModel('请先登录', '大哥你谁啊？')
        }
        else{
          wx.navigateTo({
            url: 'questionnaireList',
          })
        }
        break;
      }
      case 1:
        break;
      case 4:
      {
        app.globalData.authority = 2;
        util.showSuccess("权限等级:2");
        break;
      }
      case 5:
        {
          app.globalData.authority = 3;
          util.showSuccess("权限等级:3");
          break;
        }
      case 6:
        {
          app.globalData.authority = 4;
          util.showSuccess("权限等级:4");
          break;
        }
      default:
        break;
    }
  },

})