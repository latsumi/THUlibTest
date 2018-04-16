// pages/info/addressDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: { name: '张三', studentNum: '2222222222', sex: '男', department: '生命科学', tel: '18888888888', mail: 'xxx15@mails.tsinghua.edu.cn', address: '紫荆公寓三号楼608A', status:'班次负责人'},
    listData: [
      { key: '姓名', value: '' },
      { key: '学号', value: '' },
      { key: '性别', value: '' },
      { key: '院系', value: '' },
      { key: '手机', value: '' },
      { key: '邮箱', value: '' },
      { key: '住址', value: '' },
      { key: '备注', value: '' },],
    descs: '↓点击手机号拨打电话↓',
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
      title: '详细信息'
    })
    var i = 0
    for(var x in this.data.data){
      var str = 'listData[' + i + '].value'
      this.setData({
        [str]: this.data.data[x]
      })
      i++
    }
  },

  bindPhoneTap: function(e){
    var tel = e.target.dataset.tel
    wx.makePhoneCall({
      phoneNumber: tel,
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