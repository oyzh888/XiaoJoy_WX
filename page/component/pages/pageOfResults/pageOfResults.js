Page({
  data: { 
  },
  onLoad: function() {
    console.log(getApp().globalData.usersAnswersList)
    var u = getApp().globalData.usersAnswersList
    var c = getApp().globalData.correctAnswersList
    var n = getApp().globalData.currentQuestionId - 1
    getApp().globalData.score = 0
    console.log(c)
    for (var i = 1; i <= n; i++) {
      if (typeof u[i] == 'number') {
        var score_user_get = getApp().globalData.scoreQ3
        var score_user_get = 25 * (1 - Math.abs(score_user_get - 26) / 74)
        getApp().globalData.score += score_user_get
      }
      else if (u[i] == c[i]) {
        getApp().globalData.score += 25
      }

    }
    this.setData({
      score: Math.round(getApp().globalData.score)
    })
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
        console.log('score :', Math.round(getApp().globalData.score));
        wx.request({
          url: 'https://ouyangzhihao.com/favorites',
          data: {
            userId: avatarUrl,
            doubanId: Math.round(getApp().globalData.score)
          },
          method: 'POST', 
          "Content-Type": "application/json",
        })
      }
    })
  },
  choose: function() {
    console.log('click');
    wx.showModal({
      title: 'Are you sure?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('make sure');
          // wx.navigateTo({
          //   url: '../page2/page2'
          // })
        }
      }
    })
  },
  playAgain: function() {
    wx.navigateTo({
      url: '../welcome/welcome'
    })
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'XiaoJoy',
      path: '/page/component/pages/pageOfResults/pageOfResults?url=',
      success: function (res) {
        console.log('succeed!!!!!')
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  choose: function () {
    console.log('click');
    // wx.navigateTo({
    //   url: '../page1/page1'
    // })
  },
  toAbout:function(){
    wx.navigateTo({
      url: '../about/about'
    })
  }
})
