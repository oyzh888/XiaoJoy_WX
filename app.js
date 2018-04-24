const openIdUrl = require('./config').openIdUrl

App({
  onLaunch: function () {
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  // resetGlobalData: function() {
  //   score: 0,
  //   scoreQ3: 0,
  //   currentQuestionId: 1
  // },
  
  globalData: {
    hasLogin: false,
    openid: null,
    score: 0,
    scoreQ3: 0,
    usersAnswersList: {1:'A', 2:'A', 3:'A', 4:'A'},
    correctAnswersList: {1:'A', 2:'A', 3:'A', 4:'A'},
    currentQuestionId: 0
  },
  // lazy loading openid
  getUserOpenId: function (callback) {
    var self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success: function (data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function (res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail: function (res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail: function (err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }
})
