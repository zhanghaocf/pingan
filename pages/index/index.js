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
        img:'/assets/images/baijin.png',
        title:'简约白金卡',
        desc:'高额度免年费',
        url:'https://www.baidu.com'
      },
      {
        id: 2,
        img: '/assets/images/woman.png',
        title: '美丽女人卡',
        desc: '免年费送88礼金',
        url: 'https://www.baidu.com'
      },
      {
        id: 3,
        img: '/assets/images/pig.png',
        title: '猪小屁卡',
        desc: '猪运亨通享福袋',
        url: 'https://www.baidu.com'
      },
      {
        id: 4,
        img: '/assets/images/coffee.png',
        title: '瑞幸咖啡联名卡',
        desc: '送你150杯咖啡',
        url: 'https://www.baidu.com'
      },
      {
        id: 5,
        img: '/assets/images/kuzi.png',
        title: '梦卡',
        desc: '免年费5折享美食',
        url: 'https://www.baidu.com'
      },
      {
        id: 6,
        img: '/assets/images/taikong.png',
        title: '外星电波',
        desc: '高额度免年费',
        url: 'https://www.baidu.com'
      },
      {
        id: 7,
        img: '/assets/images/man.png',
        title: '哈登主题信用卡',
        desc: '送腾讯体育会员',
        url: 'https://www.baidu.com'
      },
       {
        id: 8,
        img: '/assets/images/black.png',
        title: '运通白金卡',
        desc: '首年免年费',
        url: 'https://www.baidu.com'
      }
    ],
    descList:[
      {
        id:1,
        title:'境外刷卡享',
        zhe:'50元',
        title2:'酒店好礼',
        desc:'单笔满200元可用',
        url:'https://www.baidu.com'
      },
      {
        id: 2,
        title: '刷卡金返还&多倍积分',
        zhe: '',
        title2:'',
        desc: '指定商户专享',
        url: 'https://www.baidu.com'
      },
      {
        id: 3,
        title: '消费送红包',
        zhe: '最高4888元',
        title2: '',
        desc: '简约白金卡',
        url: 'https://www.baidu.com'
      }
    ]
  },
  onLoad() {
  },
  moveH5(e){
    const url=e.currentTarget.dataset.url;
    my.navigateTo({
      url:'/pages/h5/h5?webview='+url
    });
  }
});
