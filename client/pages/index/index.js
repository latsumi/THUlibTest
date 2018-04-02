//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      "../../image/home_lib01.jpg",
      "../../image/home_lib02.jpg",
      "../../image/home_lib03.jpg",
    ],
    listData:[
      {
        title:"讲座：中外文电子图书数据库检索与利用（3月29日周四19:00）",
        detail:"第8讲：中外文电子图书数据库检索与利用 主讲：刘敬晗 liujh@lib.tsinghua.edu.cn 时间：2018年3月29日（四）晚7时 地点：西馆（逸夫馆）401培训教室 简介：足不出户，坐拥百万书库？鼠标在手，浩瀚书海畅游？——本馆丰富的电子图书资源可以帮助你实现这些梦想！本讲座全面介绍我馆订购的中外文电子图书数据库，并以超星数字图书馆、ebrary等 数据库为例重点介绍这类资源的使用方法。（适应对象：研究生、本科生）图书馆 2018年3月26日",
      },
      {
        title: "2018春季学期图书馆系列培训讲座开讲啦！",
        detail: "又是一年开学季，欢迎同学们参加图书馆“信息·资源·研究”系列讲座！讲座旨在帮助同学们全面、深入挖掘图书馆丰富的资源和工具，提高利用资源开展学习和研究的综合能力。面向校内所有读者开放，无需报名，先到先得，每次时间约90分钟，含课后上机实习和辅导答疑。 本学期系列讲座共设20个专题，从3月15日开始，5月8日结束，欢迎大家积极参加！讲座详细计划请点击：http://lib.tsinghua.edu.cn/service/workshop.html 主办单位：清华大学图书馆 地    点：西馆（逸夫馆）401培训教室",
      },
      {
        title: "讲座： 中外文电子期刊全文数据库检索与利用（3月30日周五19:00）",
        detail: "第9讲： 中外文电子期刊全文数据库检索与利用 主讲：曾晓牧 zengxm@lib.tsinghua.edu.cn 时间：2018年3月30日（五）晚7时 地点：西馆（逸夫馆）401培训教室 简介：期刊论文是科学研究使用最多的文献类型，全面准确地获取期刊论文将大大提高研究工作的效率。本讲以中国知网和Elsevier的ScienceDirect为例， 介绍中外文期刊论文的检索方法，并简要介绍其他常用中外文全文电子期刊数据库的使用。（适应对象：研究生、本科生） 图书馆 2018年3月26日",
      }, 
      {
        title: "近期校内违规使用电子资源通报（2018年3月9日-Annual Reviews）",
        detail: "虽然图书馆反复提醒广大校内用户要合理使用图书馆订购的电子资源，以维护广大校内用户的合法权益及清华大学的良好声誉，但仍有个别用户我行我素。2018年3月9日，生命科学学院教师谢某使用Endnote软件短时间内自动下载多篇论文违规访问Annual Reviews 数据库。该行为致使图书馆受到出版商的警告，并冻结了学校该IP对Annual Reviews数据库的访问权限。 他的行为影响了许多师生正常使用该电子资源，给图书馆今后电子资源的建设和发展造成困难。经图书馆领导教育后，他已认识到问题的严重后果，向图书馆反馈了说明。 为严肃纪律，教育本人，经清华大学图书馆馆务会议决定，对该教师的的违规行为从3月15日起在网上公布、停止借书权限半年。  近几年，校图书馆为了更好地服务于学校建设世界一流大学的战略目标，出巨资购买了大量的电子资源，较好地保证了学校教学、科研和学科建设对信息资源的需求，受到广大师生的欢迎。外国电子资源出版公司十分重视对知识产权的保护，而且都有严格的监控措施和技术手段。作为世界知名大学的清华大学师生，应该有相应的素养和意识。但遗憾的是，经常有个别人为了一己私利，不顾后果，采取不正当的方法和手段使用电子资源。其结果损害了广大师生的利益，也败坏了学校的声誉。",
      }, 
    ],

    userInfo: {},
    hasUserInfo: false,

    menu:[
      {
        menuImage: "../../image/contacts_socialScience.png",
        descs: "通讯录(社科)",
      },
      {
        menuImage: "../../image/contacts_science&tech.png",
        descs: "通讯录(科技)",
      }, 
      {
        menuImage: "../../image/dutyForm_socialScience.png",
        descs: "排班表(社科)",
      }, 
      {
        menuImage: "../../image/dutyForm_science&tech.png",
        descs: "排班表(科技)",
      },
    ]
  },

  onLoad: function () {

  },
  bindImageTap: function() {
    wx.navigateTo({
      url: '../info/bulletinDetail',
    })
  },
  bindBullTap: function(event) {
    console.log(event)
    var index = event.target.dataset.index
    var item = this.data.listData[index]
    wx.navigateTo({
      url: '../info/bulletinDetail?title=' + item.title + '&detail=' + item.detail,
    })
  }
})
