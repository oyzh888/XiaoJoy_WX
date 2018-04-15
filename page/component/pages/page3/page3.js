Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('audio2')
  },
  data: {
    current: {
      poster: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/Joy.png',
      name: 'Melody-5',
      author: 'XiaoJoy',
      src: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/3_AI_Attention.mp3',
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
          var score_user_get = getApp().globalData.scoreQ3;
          score_user_get = 25 * (1 - Math.abs(score_user_get - 50) / 50)
          getApp().globalData.score += score_user_get;
          console.log(getApp().globalData.score)
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


