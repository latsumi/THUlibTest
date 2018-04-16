// pages/info/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlFrom: '',
    formTitle: '',
    descs: '↓点击姓名查看详细信息↓',
    listData: [
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
      { name: '张三', studentNum: 2015345678 },
    ]

  },
  bindNameTap: function(event){
    var index = event.target.dataset.index
    var item = this.data.listData[index]
    wx.navigateTo({
      url: '../info/addressDetail?name=' + item.name + '&studentNum=' + item.studentNum,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    var str = res.urlFrom == 0 ? '社科库' : '科技库'
    wx.setNavigationBarTitle({//动态设置当行栏标题
      title: '通讯录'
    })
    this.setData({
      urlFrom: res.urlFrom,
      formTitle: str + '通讯录'
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