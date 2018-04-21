Page({
  data: {
  },
  choose: function () {
    getApp().globalData.currentQuestionId = 1;
    console.log('click');
    wx.navigateTo({
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
