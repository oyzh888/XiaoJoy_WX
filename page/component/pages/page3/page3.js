Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('audio2')
  },
  data: {
    current: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: 'Melody-5',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Project-For%2BMM%2BVideo_1.mp3',
    },
    audioAction: {
      method: 'pause'
    },
    slider_value:'',
  },
  
  choose: function () {
    this.audioCtx.pause();    console.log('click');
    wx.showModal({
      title: 'Are you sure?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('make sure');
          var score_user_get = getApp().globalData.scoreQ3
          //score_user_get = 25 * (1 - Math.abs(score_user_get - 26) / 74)
          var i = getApp().globalData.currentQuestionId;
          getApp().globalData.usersAnswersList[i] = score_user_get;
          console.log(score_user_get)
          getApp().globalData.currentQuestionId += 1;
          wx.redirectTo({
            url: '../page4/page4'
          })
        }
      }
    })
  },
  slider3change: function(s){
    console.log(s.detail.value);
    getApp().globalData.scoreQ3 = s.detail.value;
  }
  
})


