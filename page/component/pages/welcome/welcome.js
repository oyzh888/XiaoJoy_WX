Page({
  

  onLoad: function () {
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
        console.log(userInfo)
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
  onLoad:function(){
    
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
