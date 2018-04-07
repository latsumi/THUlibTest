// pages/me/questionnaireFill.js
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
    radioFrom: [
      { name: '社科', value: '0' },
      { name: '科技', value: '1' },
    ],
    radioStatus: [
      { name: '负责人', value: '0' },
      { name: '老队员', value: '1' },
      { name: '新队员', value: '2' },
    ],
    
  },
  
  save: function (e) {
    console.log("所提交的值为 ",e.detail.value);
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
        title: res.title
      })
    this.setData({//取值并更新数据和UI
      title: res.title,
      quesId: res.quesId,
      desc: res.desc,//标题下的描述
      detail: res.detail,//第5题对于班次细节的描述
      isClass: JSON.parse(res.isClass),//是否是排班问卷
      canIChoose: JSON.parse(res.canIChoose),
    })
    console.log(this.data.desc)
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