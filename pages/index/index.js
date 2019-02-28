const app = getApp();
Page({
  data: {
    bannerList:[
      {
        id:1,
        img:'/assets/images/banner.png',
        url: 'https://www.baidu.com'
      },
      {
        id: 2,
        img: '/assets/images/banner.png',
        url: 'https://www.baidu.com'
      },
      {
        id: 3,
        img: '/assets/images/banner.png',
        url: 'https://www.baidu.com'
      }
    ],
    adver:{
      img: '/assets/images/adver.png',
      url:'https://www.baidu.com'
    },
    cardList:[
      {
        id:1,
        img:'/assets/images/standard.jpg',
        title:'平安标准卡',
        desc:'海陆空意外保障',
        url:'https://www.baidu.com'
      },
      {
        id: 2,
        img: '/assets/images/carowner.jpg',
        title: '平安车主卡',
        desc: '加油88折年返960',
        url: 'https://www.baidu.com'
      },
      {
        id: 3,
        img: '/assets/images/manlian.jpg',
        title: '曼联红魔白金卡',
        desc: '任选球星定制卡面',
        url: 'https://www.baidu.com'
      },
      {
        id: 4,
        img: '/assets/images/uni.jpg',
        title: '平安由你卡',
        desc: '权益自由定制',
        url: 'https://www.baidu.com'
      },
      {
        id: 5,
        img: '/assets/images/qiy.jpg',
        title: '平安爱奇艺金卡',
        desc: '年年送爱奇艺会员',
        url: 'https://www.baidu.com'
      },
      {
        id: 6,
        img: '/assets/images/taobao.jpg',
        title: '平安淘宝联名卡',
        desc: '支付宝消费享积分',
        url: 'https://www.baidu.com'
      },
      {
        id: 7,
        img: '/assets/images/fashion.jpg',
        title: '平安BE@RBRICK时尚卡',
        desc: '5款z至潮卡面任选',
        url: 'https://www.baidu.com'
      },
       {
        id: 8,
        img: '/assets/images/travel.jpg',
        title: '中国旅游卡金卡',
        desc: '旅游消费超值回馈',
        url: 'https://www.baidu.com'
      }
    ],
    descList:[
      {
        id:1,
        title:'满记低至',
        zhe:'5折',
        desc:'代金券天天乐购',
        url:'https://www.baidu.com'
      },
      {
        id: 2,
        title: '在线冲立享',
        zhe: '88折',
        desc: '平安车主信用卡专享',
        url: 'https://www.baidu.com'
      },
      {
        id: 3,
        title: '最高',
        zhe: '1200元',
        desc: '平安信用卡境外笔笔返',
        url: 'https://www.baidu.com'
      }
    ],
    footer:{
      jisu:'https://www.baidu.com',
      jindu: 'https://www.baidu.com',
      online: 'https://www.baidu.com',
      remen: 'https://www.baidu.com',
      chaxun:'https://www.baidu.com'
    },
    // isshow: false,
     isPhoneX: false
  },
  onLoad() {
    this.setData({
      isPhoneX:app.globalData.isPhoneX
    })
  },
  moveH5(e){
    const url=e.currentTarget.dataset.url;
    my.navigateTo({
      url:'/pages/h5/h5?webview='+url
    });
  },
  // showWrap(){
  //   var isshow=!this.data.isshow;
  //   this.setData({
  //     isshow: isshow
  //   })
  // },
  // closeopera(){
  //   var isshow = this.data.isshow;
  //   if (!isshow){
  //     return;
  //   }
  //   this.setData({
  //     isshow: false
  //   })
  // }
});
