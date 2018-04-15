Page({
  data: {
    current1: {
      poster: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/Joy.png',
      name: 'Melody-6',
      author: 'XiaoJoy',
      src: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/4_AI_LongSample.mp3',
    },
    current2: {
      poster: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/xiao.png',
      name: 'Melody-7',
      author: 'XiaoJoy',
      src: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/4_Mozart.mp3',
    },

    audioAction: {
      method: 'pause'
    },

  },
  play1: function () {
    this.audioCtx = wx.createAudioContext('audio1'),
      this.audioCtx.pause()
  },
  play2: function () {
    this.audioCtx = wx.createAudioContext('audio2'),
      this.audioCtx.pause()
  },
  choose: function (b) {
    this.play1();
    this.play2();
    console.log('click');
    // Duplicated code! Refactor
    console.log(b.target.id);
    var i = getApp().globalData.currentQuestionId;
    var usersAnswer = b.target.id;
    var correctAnswer = getApp().globalData.correctAnswersList[i - 1];
    if (usersAnswer == correctAnswer) {
      getApp().globalData.score += 25;
    }
    console.log("Your answer: " + usersAnswer + "\nCorrect answer: " + correctAnswer + "\n" + "Score: " + getApp().globalData.score);
    getApp().globalData.currentQuestionId += 1;

    wx.showModal({
      title: 'Are you sure?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('You finished!');
          
          wx.navigateTo({
            url: '../pageOfResults/pageOfResults'
          })
        }
      }
    })
  }
})
