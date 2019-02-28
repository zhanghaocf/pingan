const app = getApp();
Page({
  data: {
    bannerList:[
      {
        id:1,
        img:'/assets/images/banner.png',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000YT000015xmhLUA_3NYNegax63hNc5euWB1lKsaK7UFf8wYV-hcvbED75jRW0BPf9c6Bhh6-Y_qnvduL0i344AKiXCoDZx6VHYKkm_4WRF_wYqoset0E75gJV_3TBy455AfVvlM-JsSI8dm3sbMzhL5lagSSYA..&sign=g12VWw-QDf0-dC6LZmL-baTg1DyzXgf2ZZ9-ZmCd_dM'
      },
      {
        id: 2,
        img: '/assets/images/banner.png',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000YT000015xmhLUA_3NYNegax63hNc5euWB1lKsaK7UFf8wYV-hcvbED75jRW0BPf9c6Bhh6-Y_qnvduL0i344AKiXCoDZx6VHYKkm_4WRF_wYqoset0E75gJV_3TBy455AfVvlM-JsSI8dm3sbMzhL5lagSSYA..&sign=g12VWw-QDf0-dC6LZmL-baTg1DyzXgf2ZZ9-ZmCd_dM'
      },
      {
        id: 3,
        img: '/assets/images/banner.png',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000YT000015xmhLUA_3NYNegax63hNc5euWB1lKsaK7UFf8wYV-hcvbED75jRW0BPf9c6Bhh6-Y_qnvduL0i344AKiXCoDZx6VHYKkm_4WRF_wYqoset0E75gJV_3TBy455AfVvlM-JsSI8dm3sbMzhL5lagSSYA..&sign=g12VWw-QDf0-dC6LZmL-baTg1DyzXgf2ZZ9-ZmCd_dM'
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
        url:'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000BZ000015U9731L58fuARTFJVtak8-0PyD_oe7-YMH-iwm9VgIyUuww9zUqdWX3vd1OSCNpAMRCy3pPeb6JZdLkfLqsto_h9U8uhXGwa7btgTbw1PaCJbZe3E6s46CtH0VlHrj25AcmbbOXZEKuBlGIRueN1Hw..&sign=Min_6n-FWHcCrjN-gDnoG-UEYPzgQ-4HbpDY_gnNCxk.'
      },
      {
        id: 2,
        img: '/assets/images/carowner.jpg',
        title: '平安车主卡',
        desc: '加油88折年返960',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000CZ00001ij_blhnliaq2WG7PsyTSau0PyD_oe7-YMH-iwm9VgIwsXrqNNLEJ9zPKTOrsvAQ7MRCy3pPeb6JZdLkfLqsto_h9U8uhXGwa7btgTbw1PaCJbZe3E6s46CtH0VlHrj25AcmbbOXZEKuBlGIRueN1Hw..&sign=kfql5oU-qOGH7nBxKGcHeRTwnrr1wZ6Ae6XlwXwwM2k.'
      },
      {
        id: 3,
        img: '/assets/images/manlian.jpg',
        title: '曼联红魔白金卡',
        desc: '任选球星定制卡面',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000ML00001-904Bkd1WCCXEX_J_DcyVtzidtSxRu2c0t9FMEgmfTOVCRmltqtmbO41IjFdCbQv3N5fv2I6E5cnRZvQsh4NFZh3nP_IpxLF4W2hEPA6DAScpy0axcuqnjJeCom5mgTTLy8UNXt9u2PpWO_0pz7iRQ..&sign=eTbPyFk2rgK-zlFQpy7OvyPxeB1CC0EfmP-cHzmNvio.'
      },
      {
        id: 4,
        img: '/assets/images/uni.jpg',
        title: '平安由你卡',
        desc: '权益自由定制',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000YN00001xiO_zbdhodUO6_b-23P0z61xwjmji4l_skCTc5-4UJwvE2dgmvKxZrDCBwX06LRt7Q_IP-h7v5gwf6LCb1WAjFztIsaMFif8PXLmwjDOgUIxELLek95voll0uR8uqy2j-H1Ty6FcbBrtu2BNvDU9oIltl7cTqzjoK0fRWUeuPbkByZts5dkQq4GUYhG543Uf&sign=DBTElKUWnvzJMnV7KgdzJ6tD9GpaFLEhhHYhdfH40a8.'
      },
      {
        id: 5,
        img: '/assets/images/qiy.jpg',
        title: '平安爱奇艺金卡',
        desc: '年年送爱奇艺会员',
        url: 'https://c.pingan.com/ca/applyIndex?data=910000691000000000000AQY00001l1zONPIovodMp0Ny7LEKhJeuWB1lKsaK7UFf8wYV-hfcuFgctmaKEb4gvZNTEShlPXZ89EvnEzCjoY-pX2KheHT8mXFlwcsXeS8L3HjdsdnTIMBRhZ3tSQ-PsVQI8iK4U4pcN2Tp0tyecbTjYThGpQ..&sign=0ZNu_cGtwplVw4ZzWrY5gxS1tDtWbvYJg_oqhUb2wxE.'
      },
      {
        id: 6,
        img: '/assets/images/taobao.jpg',
        title: '平安淘宝联名卡',
        desc: '支付宝消费享积分',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000TB00001r2QR_4axDo65Zgs6MhhcYu0PyD_oe7-YMH-iwm9VgIybULKKwfTUDCukckF080uiMRCy3pPeb6JZdLkfLqsto_h9U8uhXGwa7btgTbw1PaCJbZe3E6s46CtH0VlHrj25AcmbbOXZEKuBlGIRueN1Hw..&sign=tY3t00YEIWuMDswvKsrtvvrN9bmo_J2Rqgaz3H3z0h0.'
      },
      {
        id: 7,
        img: '/assets/images/fashion.jpg',
        title: '平安BE@RBRICK时尚卡',
        desc: '5款z至潮卡面任选',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000BE00001VflFoWT18oPOR3D7Oj-LHe0PyD_oe7-YMH-iwm9VgIyNw2s-I2saZORp2GtHmSMEMRCy3pPeb6JZdLkfLqsto_h9U8uhXGwa7btgTbw1PaCJbZe3E6s46CtH0VlHrj25AcmbbOXZEKuBlGIRueN1Hw..&sign=Gky7UJlSO7eiX3u_lwT-H9X8zQh0HuUk2iUh9v1RFpU.'
      },
       {
        id: 8,
        img: '/assets/images/travel.jpg',
        title: '中国旅游卡金卡',
        desc: '旅游消费超值回馈',
        url: 'https://c.pingan.com/ca/applyIndex?data=9100006910000000000000LY00001G97TXqtNu57xx_o6aoF-GpeuWB1lKsaK7UFf8wYV-he1INZHwGOaUiEkif9QECAvY_qnvduL0i344AKiXCoDZx6VHYKkm_4WRF_wYqoset0E75gJV_3TBy455AfVvlM-JsSI8dm3sbMzhL5lagSSYA..&sign=L0kTUXIk1ssIvAOruEfKt1SRYQmfPe2KaeR2IgIcsDc.'
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
      jisu:'https://zhgroot.cn',
      remen: 'https://www.baidu.com',
      chaxun:'https://nginx.zhgroot.cn'
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
