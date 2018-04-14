Page({
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    audioAction: {
      method: 'pause'
    },
    slider_value:'',
  },
  choose: function () {
    console.log('click');
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
          wx.navigateTo({
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


