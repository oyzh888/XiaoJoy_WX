Page({
  data: {
    current1: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: 'Melody-3',
      author: 'XiaoJoy',
<<<<<<< HEAD
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/2_AI_Single_LittleStar.mp3',
=======
      src: 'https://xiaojoy.blob.core.chinacloudapi.cn/audios/2_BachWTC1222.mp3',
>>>>>>> 076b1c61cbf81b06940a8342efe68e1eea87ace3
    },
    current2: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: 'Melody-4',
<<<<<<< HEAD
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/2_BachWTC1222.mp3',
=======
      author: 'XiaoJoy',        
      src:'https://xiaojoy.blob.core.chinacloudapi.cn/audios/2_AI_Single_LittleStar.mp3',
>>>>>>> 076b1c61cbf81b06940a8342efe68e1eea87ace3
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
      title: 'Are you sure?',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
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

          wx.redirectTo({
            url: '../page3/page3'
          })
        }
      }
    })
  }
})
