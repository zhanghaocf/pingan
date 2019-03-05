const app = getApp();
Page({
  data: {
    bannerList:[
      {
        id:1,
        img:'/assets/images/banner.png',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=26&versionNo=R10310&scc=910000691&mt=YT00001'
      },
      {
        id: 2,
        img: '/assets/images/banner.png',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=26&versionNo=R10310&scc=910000691&mt=YT00001'
      },
      {
        id: 3,
        img: '/assets/images/banner.png',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=26&versionNo=R10310&scc=910000691&mt=YT00001'
      }
    ],
    adver:{
      img: '/assets/images/adver.png',
      url:'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=1a2a3a4a5a7a8a9a10a11a12a13a15a20a21a22a23a26a29a30ap3at4amk12atcw1atcw2&versionNo=R10310&scc=910000691&mt=QK00001'
    },
    cardList:[
      {
        id:1,
        img:'/assets/images/standard.jpg',
        title:'平安标准卡',
        desc:'海陆空意外保障',
        url:'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=1&versionNo=R10310&scc=910000691&mt=BZ00001'
      },
      {
        id: 2,
        img: '/assets/images/carowner.jpg',
        title: '平安车主卡',
        desc: '加油88折年返960',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=3&versionNo=R10310&scc=910000691&mt=CZ00001'
      },
      {
        id: 3,
        img: '/assets/images/manlian.jpg',
        title: '曼联红魔白金卡',
        desc: '任选球星定制卡面',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=mk12&versionNo=R10310&scc=910000691&mt=ML00001'
      },
      {
        id: 4,
        img: '/assets/images/uni.jpg',
        title: '平安由你卡',
        desc: '权益自由定制',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=9&versionNo=R10310&scc=910000691&mt=YN00001'
      },
      {
        id: 5,
        img: '/assets/images/qiy.jpg',
        title: '平安爱奇艺金卡',
        desc: '年年送爱奇艺会员',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=t4&versionNo=R10310&scc=910000691&mt=AQY00001'
      },
      {
        id: 6,
        img: '/assets/images/taobao.jpg',
        title: '平安淘宝联名卡',
        desc: '支付宝消费享积分',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=8&versionNo=R10310&scc=910000691&mt=TB00001'
      },
      {
        id: 7,
        img: '/assets/images/fashion.jpg',
        title: '平安BE@RBRICK时尚卡',
        desc: '5款z至潮卡面任选',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=2&versionNo=R10310&scc=910000691&mt=BE00001'
      },
       {
        id: 8,
        img: '/assets/images/travel.jpg',
        title: '中国旅游卡金卡',
        desc: '旅游消费超值回馈',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=10&versionNo=R10310&scc=910000691&mt=LY00001'
      }
    ],
    descList:[
      {
        id:1,
        title:'满记低至',
        zhe:'5折',
        desc:'代金券天天乐购',
        url:'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=1a2a3a4a5a7a8a9a10a11a12a13a15a20a21a22a23a26a29a30ap3at4amk12atcw1atcw2&versionNo=R10310&scc=910000691&mt=QK00002'
      },
      {
        id: 2,
        title: '在线冲立享',
        zhe: '88折',
        desc: '平安车主信用卡专享',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=3&versionNo=R10310&scc=910000691&mt=CZ00001'
      },
      {
        id: 3,
        title: '最高',
        zhe: '1200元',
        desc: '平安信用卡境外笔笔返',
        url: 'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=1a2a3a4a5a7a8a9a10a11a12a13a15a20a21a22a23a26a29a30ap3at4amk12atcw1atcw2&versionNo=R10310&scc=910000691&mt=QK00002'
      }
    ],
    footer:{
      jisu:'https://b.pingan.com.cn/ca/ocr/index.html?channel=XCX&onlineSQFlag=N&sign=b14a7241-ba3b-4b57-9bb9-d0af4e02321c3ade49f0587c56f97af65d27794deac1&ccp=1a2a3a4a5a7a8a9a10a11a12a13a15a20a21a22a23a26a29a30ap3at4amk12atcw1atcw2&versionNo=R10310&scc=910000691&mt=QK00002',
      chaxun:'https://b.pingan.com.cn/ca/ccBooking/ccBookingHtml/query/index.html'
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
