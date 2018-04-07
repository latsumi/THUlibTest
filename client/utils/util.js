const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

//跳转到登录页面
function jumpToLogin(url) {
  wx.showModal({
    title: '请先登录',
    content: '大哥你谁啊？',
    confirmText: '去登录',
    showCancel: false,
    success(res) {
      wx.switchTab({
        url: url,
      })
    }
  })
}

module.exports = { formatTime, showBusy, showSuccess, showModel, jumpToLogin:  jumpToLogin }
