// pages/me/me.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var http = require('../../utils/http')
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
    authority: '',
    name: '',
    library: '',
    menu:[
      { menuImage: "../../image/questionnaire.png", descs: "填写问卷" },
      { menuImage: "../../image/manHour.png", descs: "工时查看" },
      { menuImage: "../../image/bindingNum.png", descs: "绑定学号" },
      { menuImage: "../../image/messageBox.png", descs: "留言" },
      { menuImage: "../../image/beMember.png", descs: "成为队员" },
      { menuImage: "../../image/beLeader.png", descs: "成为负责人" },
      { menuImage: "../../image/beAdmin.png", descs: "成为管理员" },
    ]

  },
  login: function () {
    //下面的句子在实际运用中可能会导致bug
    if (this.data.logged) return
    var that = this
    wx.authorize({
      scope: 'scope.userInfo',
      success(res) {
        console.log('授权成功')
        util.showBusy('正在登录')
        // 调用登录接口
        qcloud.login({
          success(result) {
            /*if (result) {
              util.showSuccess('登录成功')
              that.setData({
                userInfo: result,
                logged: true,
              })
            } else {*/
            // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
            //修改：无论是否首次登录都重新请求用户信息
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
                util.showFail('请求失败', '请请检查网络连接')
                console.log('request fail', error)
              },
              complete() {//根据用户的openId去通讯录查询权限
                app.globalData.userInfo = that.data.userInfo
                app.globalData.authority = 1
                console.log(app.globalData.userInfo)
                var data = {}
                data.openId = that.data.userInfo.openId
                http.POST({
                  url: 'getStatus',
                  data: data,
                  success: function (res) {
                    console.log('返回值为：', res.data.data)
                    if(res.data.data.length != 0)
                    {
                      that.setData({
                        authority: res.data.data[0].grade,
                        name: res.data.data[0].name,
                        library: res.data.data[0].library,
                      })
                      app.globalData.authority = that.data.authority
                      app.globalData.name = that.data.name
                      app.globalData.library = that.data.library
                      console.log('全局变量的值为：', app.globalData)
                    }
                  },
                  fail: function (res) {
                    util.showNetworkFail()
                  }, complete: function (res) { },
                })
              }
            })
            
          },
          fail(error) {
            util.showFail('登录失败', '请检查网络连接')
            console.log('登录失败', error)
          },
          
        })
      },
      fail(res) {
        wx.showModal({
          title: '请求授权失败',
          content: '将无法使用小程序的大部分功能，要转到设置界面去授权吗？',
          success: function (res) {
            if(res.confirm){
              wx.openSetting({
                //重新获取用户信息
              })
            }
          }
        })
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
    if (app.globalData.authority < 1&&index<4) {
      util.showFail('请先登录', '大哥你谁啊？')
    }
    else {
      switch(index)
      {
        case 0:
        {
          wx.navigateTo({
            url: '../toWork/editQuestionnaire/questionnaireView?urlFrom=me',
          })
          break;
        }
        case 1:
        {
          wx.navigateTo({
            url: 'manHourView',
          })
          break;
        }
        case 2:
        {
            wx.navigateTo({
              url: 'bindStudentNum',
            })
          break;
        }
        case 3:
          {
            wx.makePhoneCall({
              phoneNumber: '18813139066',
            })
            break;
          }
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
    }
  },

})