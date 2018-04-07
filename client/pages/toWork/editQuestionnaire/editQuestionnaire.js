// pages/toWork/editQuestionnaire/editQuestionnaire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    quesId: "",
    desc: "",//标题下的描述
    detail: "",//第5题对于班次细节的描述
    isClass: false,//是否是排班问卷
    canIChoose: [],
    radioType: [
      { name: '信息收集', value: '0' },
      { name: '报班/调班/补选问卷', value: '1' },
    ],
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
      title: "编辑问卷"
    }),
    this.setData({//取值并更新数据和UI
      title: res.title,
      quesId: res.quesId,
      desc: res.desc,//标题下的描述
      detail: res.detail,//第5题对于班次细节的描述
      isClass: JSON.parse(res.isClass),//是否是排班问卷
      canIChoose: JSON.parse(res.canIChoose),
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