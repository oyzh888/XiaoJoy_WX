Page({
  data: {
    current1: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: '乐曲-3',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/2_BachWTC1222.mp3',

    },
    current2: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: '乐曲-4',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/2_AI_Single_LittleStar.mp3',
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
    console.log('click');
    this.play1();
    this.play2();
    wx.showModal({
      title: '你确定没听错?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          // Duplicated code! Refactor
          var i = getApp().globalData.currentQuestionId;
          console.log(b.target.id);
          var usersAnswer = b.target.id;
          getApp().globalData.usersAnswersList[i] = b.target.id
          console.log("Your answer: " + usersAnswer + "Score: " + getApp().globalData.score);
          getApp().globalData.currentQuestionId += 1;

          wx.redirectTo({
            url: '../page3/page3'
          })
        }
      }
    })
  }
})
