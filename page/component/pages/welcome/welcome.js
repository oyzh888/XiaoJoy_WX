Page({

  onLoad: function () {
    console.assert(123)
    // 页面渲染后 执行
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        
      }
    })
    wx.request({
      url: 'https://ouyangzhihao.com/userpoint',
      success: function (res) {
        console.log("get successfully")
        console.log(res.data)
        getApp().globalData.avescore = res.data
        console.log(getApp().globalData.avescore)
      }
    })
  },
  
  data: {
  },
  choose: function () {
    getApp().globalData.currentQuestionId = 1;
    console.log('click');
    wx.redirectTo({
      url: '../page1/page1'
    })
  },
  
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'XiaoJoy',
      path: '/page/component/pages/welcome/welcome?url=',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
