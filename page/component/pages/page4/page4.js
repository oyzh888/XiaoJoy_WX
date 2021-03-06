Page({
  data: {
    current1: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: '乐曲-6',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/3_AI_Attention.mp3',
    },
    current2: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: '乐曲-7',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/3_%C3%A6%C2%B5%C2%81%C3%A8%C2%A1%C2%8C.mp3',
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
    
    wx.showModal({
      title: '最后一题了,确定?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('click');
          // Duplicated code! Refactor
          console.log(b.target.id);
          var i = getApp().globalData.currentQuestionId;
          var usersAnswer = b.target.id;
          getApp().globalData.usersAnswersList[i] = b.target.id
          console.log("Your answer: " + usersAnswer + "\n" + "Score: " + getApp().globalData.score);
          getApp().globalData.currentQuestionId += 1;
          console.log(getApp().globalData.currentQuestionId);
          
          wx.redirectTo({
            url: '../pageOfResults/pageOfResults'
          })
        }
      }
    })
  }
})
