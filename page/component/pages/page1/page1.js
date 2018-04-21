Page({

  data: {
    sequence:'1/4',
    current1: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: '乐曲-1',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/1_AI_Bach_C.mp3',
    },
    current2: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: '乐曲-2',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/1_Single_Mozart_K049_30.mp3',
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
      title: '确定没错?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          
          console.log(b.target.id);
          var i = getApp().globalData.currentQuestionId;
          var usersAnswer = b.target.id;
          console.log(i)
          var correctAnswer = getApp().globalData.correctAnswersList[i - 1];
          if (usersAnswer == correctAnswer) {
            getApp().globalData.score += 25;
          }
          console.log("Your answer: " + usersAnswer + "\nCorrect answer: " + correctAnswer + "\n" + "Score: " + getApp().globalData.score);
          getApp().globalData.currentQuestionId += 1;
          wx.redirectTo({
            url: '../page2/page2'
          })
        }
      }
    })
  }
})
