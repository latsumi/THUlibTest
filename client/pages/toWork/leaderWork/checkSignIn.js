// pages/toWork/leaderWork/checkSignIn.js
var util = require('../../../utils/util.js')
var http = require('../../../utils/http')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {id:17,name:'曹思奇',library:0,workType:1,isLeader:1,manHour:2,isRelief:1},
      { id: 18, name: '曹思奇', library: 0, workType: 3, isLeader: 1, manHour: 0, isRelief: 1 },
      { id: 17, name: '萧霭静', library: 0, workType: 1, isLeader: 1, manHour: 2, isRelief: 0 },
      { id: 18, name: '萧霭静', library: 0, workType: 0, isLeader: 1, manHour: 0, isRelief: 0 },
      { id: 19, name: '荆潇', library: 1, workType: 1, isLeader: 0, manHour: 1, isRelief: 1 },
      { id: 14, name: '荆潇', library: 1, workType: 3, isLeader: 0, manHour: 2, isRelief: 0 },
      { id: 11, name: '荆潇', library: 1, workType: 0, isLeader: 0, manHour: 2, isRelief: 0},
    ],
    showData:[],
    library: 0,
    currentDay: '',
    classes: ['早班', '午班', '晚一', '晚二',],
    manHour: ['1.5h', '2h', '2.5h', '3h'],
    remarks: ['替班', '负责人'],
    descs: '↓下拉刷新签到信息↓',
    radioChoose: [
      { name: '是', value: '1' },
      { name: '否', value: '0' },
    ],
    week: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '第十三周', '第十四周', '第十五周', '第十六周', '第十七周', '第十八周'],
    day: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    chooseWeek: '点击选择周次',
    chooseDay: '点击选择星期',

  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      library: app.globalData.library
    })
    var str = ''
    if (this.data.library == 1)
      str = '-科技库'
    if (this.data.library == 0)
      str = '-社科库'
    wx.setNavigationBarTitle({
      title: '检查签到' + str
    })
  },
  bindPickerWeekChange: function (e) {
    var id = e.detail.value;
    var hasChoose = this.data.week[id];
    console.log('现在选择的是：' + hasChoose)
    this.setData({
      chooseWeek: hasChoose
    })
  },
  bindPickerDayChange: function (e) {
    var id = e.detail.value;
    var hasChoose = this.data.day[id];
    console.log('现在选择的是：' + hasChoose)
    this.setData({
      chooseDay: hasChoose
    })
  },
  save: function (e) {
    var data = e.detail.value;
    if (data.id.length == 0 || data.whichWeek === '点击选择周次' || data.whichDay === '点击选择星期' ||data.personNum === '') {
      if (data.id.length == 0 )
        util.showFailShort('请选择要确认的签到信息！')
      else {
        if (data.whichWeek === '点击选择周次')
          util.showFailShort('请选择周次！')
        else{
          if (data.whichDay === '点击选择星期')
            util.showFailShort('请选择星期！')
          else
            util.showFailShort('请填写上班人数！')
        }
      }
    }
    else {
      data.name = app.globalData.name
      data.library = app.globalData.library
      console.log('提交的数据是：', data)
      wx.showModal({
        title: '提示',
        content: '确认提交？',
        success: function (res) {
          if (res.confirm) {
            util.showBusy('少女祈祷中')
            http.POST({
              url: "",  //待填
              data: data,
              success: function (res) {
                wx.navigateBack({
                  delta: 1
                })
                util.showSuccess('提交成功！')
              },
              fail: function (res) {
                util.showFail('提交失败', '请稍后再试')
              }, complete: function (res) { },
            })
          }
        }
      })
    }
  },
  delSign: function (e) {
    var data = e.detail.value;
    console.log('提交的数据是：', data)
    if (data.id.length === 0){
      util.showFailShort('请选择要删除的签到信息！')
    }
    else {
      wx.showModal({
        title: '提示',
        content: '确认删除？',
        success: function (res) {
          if (res.confirm) {
            util.showBusy('少女祈祷中')
            http.POST({
              url: "",  //待填
              data: data,
              success: function (res) {
                wx.navigateBack({
                  delta: 1
                })
                util.showSuccess('成功删除！')
              },
              fail: function (res) {
                util.showFail('提交失败', '请稍后再试')
              }, complete: function (res) { },
            })
          }
        }
      })
    }
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
    var dates = new Date();
    var day = dates.getDay();
    this.setData({
      currentDay: day,
      chooseDay: this.data.day[day],
    })
    var that = this;
    /*http.GET({
      url: '',  //待填
      data: {},
      success: function (res) {
        that.setData({
          listData: res.data.data,
        })
      },
      fail: function (res) { }, complete: function (res) { },
    })*/


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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;
    http.GET({
      url: '',  //待填
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