// pages/me/questionnaireList.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        title: "【重要】2018年五一假期排班问卷",
        quesId: "1st",  
        desc: "1.本问卷截止时间为第1周周四（9月21日）10:00，过时不候。\n2.本问卷为报班唯一途径。\n3.本问卷适用于正常工作期间", //标题下的描述
        detail: "第一位数字表示星期，第二位字母A、B、C、D依次表示早班、午班、晚一、晚二。例如7C表示周日晚一。",//第5题上面对于班次细节的描述
        isClass : true,//是否是排班问卷
        canIChoose: ["1A", "1B", "2A", "2B", "3A", "3B",]
      },
      {
        title: "2018年图书馆助理分队个人信息统计问卷",
        quesId: "2nd",
        desc: "",
        detail: "",//第5题对于班次细节的描述，时间、可选项等等
        isClass: false,//是否是排班问卷
        canIChoose: []
      },
      {
        title: "【重要】2017秋社科库16-18周报班",
        quesId: "3rd",
        desc: "1.本问卷截止时间为第1周周四（9月21日）10:00，过时不候。\n2.本问卷为报班唯一途径。\n3.本问卷适用于正常工作期间",
        detail: "第一位数字表示星期，第二位字母A、B、C、D依次表示早班、午班、晚一、晚二。例如7C表示周日晚一。",//第5题对于班次细节的描述
        isClass: true,//是否是排班问卷
        canIChoose: ["1A", "2A", "3A", "4A", "5A"]
      },
      {
        title: "2018秋调班问卷",
        quesId: "4th",
        desc: "多选，先到先得",
        detail: "",//第5题对于班次细节的描述
        isClass: true,//是否是排班问卷
        canIChoose: ["6A", "6B", "6C", "6D", "7D"]
      },
    ],
  },
  bindViewTap: function (event) {
    console.log(event)
    var index = event.target.dataset.index
    var item = this.data.listData[index]
    wx.navigateTo({
      url: 'questionnaireFill?title=' + item.title + '&quesId=' + item.quesId + '&desc=' + item.desc + '&detail=' + item.detail + '&isClass=' + JSON.stringify(item.isClass) + '&canIChoose=' + JSON.stringify(item.canIChoose),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({//动态设置当行栏标题
      title: "问卷列表"
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