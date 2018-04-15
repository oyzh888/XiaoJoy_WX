Page({
  data: {
    current: {
      poster: 'http://xiaojoy-1252249490.cosbj.myqcloud.com/images/Joy.png?sign=7T8cZVJDpsd7bSF88mLU8IV23JdhPTEyNTIyNDk0OTAmaz1BS0lENzNsRldZMXlNV1I4YXBkYTdVY1dGbTZDM2YxN01mOWkmZT0xNTI2MzEwMjM2JnQ9MTUyMzcxODIzNiZyPTIwNTMxNzIwNTgmZj0vaW1hZ2VzL0pveS5wbmcmYj14aWFvam95',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    audioAction: {
      method: 'pause'
    }
  },
  choose: function (b) {
    console.log('click');
    wx.showModal({
      title: 'Are you sure?',
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
          wx.navigateTo({
            url: '../page2/page2'
          })
        }
      }
    })
  }
})
