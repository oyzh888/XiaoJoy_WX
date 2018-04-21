Page({
  onLoad: function () {
    // 页面渲染后 执行
  },
  
  data: {
    current1: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: 'Melody-1',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/1_AI_Bach_C.mp3',
    },
    current2: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: 'Melody-2',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/1_Single_Mozart_K049_30.mp3',
    },
    current3: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: 'Melody-3',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/2_AI_Single_LittleStar.mp3',
    },
    current4: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: 'Melody-4',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/2_BachWTC1222.mp3',
    },
    current5: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: 'Melody-5',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Project-For%2BMM%2BVideo_1.mp3',
    },
    current6: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/xiao.png',
      name: 'Melody-6',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/3_AI_Attention.mp3',
    },
    current7: {
      poster: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/Joy.png',
      name: 'Melody-7',
      author: 'XiaoJoy',
      src: 'https://xiaojoy-1256532887.cos.ap-chengdu.myqcloud.com/3_%C3%A6%C2%B5%C2%81%C3%A8%C2%A1%C2%8C.mp3',
    },
    audioAction: {
      method: 'pause'
    },
  },

  myplay:function(e){
    console.log('play handler :',e.target.id);
    for(let i=1;i<=7;i++){
      i=i.toString();
      if(e.target.id!=i){
        this.audioCtx = wx.createAudioContext(i),
        this.audioCtx.pause()
      }
    }
  }
  
  
})
