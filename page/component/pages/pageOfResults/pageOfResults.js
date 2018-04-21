Page({

  // onLoad: function (){
  //   wx.getUserInfo({
  //     success: function (res) {
  //       var userinfo = res.userInfo
  //       console.log(userinfo.city)
  //       var nickname = userinfo.nickname
  //       var city = userinfo.city
  //       var gender = userinfo.gender
  //     },
  //     fail: function (res) { console.log("fail") },
  //     complete: function (res) { console.log("finish!!" + userinfo.city)},
  //   })
  // },

  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    audioAction: {
      method: 'pause'
    }
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
    resetGlobalData();
    wx.navigateTo({
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
})
