const app = getApp();
Page({
  data: {
    clickIndex:-1,
    wrapbol:false,
    classifyval:'',
    bannerList:[
      {
        id:1,
        img:'/assets/images/banner.png'
      },
      {
        id: 2,
        img: '/assets/images/banner.png'
      },
      {
        id: 3,
        img: '/assets/images/banner.png'
      }
    ],
    classifymenu:{
      1:['* 全部分类','标准卡','购物卡','车主卡','卡通卡','商旅卡','游戏卡','多倍积分卡','主题卡'],
      2:['* 全部等级','普卡','金卡','白金卡','钻石卡','钛金卡','无限卡'],
      3:['* 卡组织','Visa','Master Card','中国银联','运通卡']
    },
    selectmenu:[],
    classifyList:[],
    cardList: [
      {
        img: '/assets/images/car03.png',
        name: '平安车主卡',
        characteristics: ['加油享88折优惠', '最高110万全车人员意外保障', '线下消费双倍积分'],
        id: 1,
        url: 'https://zhgroot.cn/educational_administration_system/index.php/Home/Index/company/index/平安车主',
        desc:'周六消费半价',
        number:1653,
        classify:'标准卡',
        level:'金卡',
        organazition:'中国银联'
      },
      {
        img: '/assets/images/pingan.png',
        name: '平安银行标准信用卡',
        characteristics: ['海陆空意外保障', '享受金卡燃气意外保障', '72小时失卡保障'],
        id: 2,
        url: 'https://zhgroot.cn/educational_administration_system/index.php/Home/Index/company/index/平安银行标准信用',
        desc: '刷6次免年费',
        number: 1267,
        classify: '标准卡',
        level: '金卡',
        organazition: 'Visa'
      },
      {
        img: '/assets/images/bao.png',
        name: '平安曼联红魔白金卡',
        characteristics: ['办套卡享受首年免年费', '任意选取球星定制信用卡卡面', '曼联礼品轻松刷享'],
        id: 3,
        url: 'https://zhgroot.cn/educational_administration_system/index.php/Home/Index/company/index/平安曼联红魔白金',
        desc: '礼品轻松刷享',
        number: 657,
        classify: '购物卡',
        level: '白金卡',
        organazition: '运通卡'
      }
    ]
  },
  onLoad() {
    var windowHeight = my.getSystemInfoSync().windowHeight;
    this.setData({
      windowHeight: windowHeight
    })
  },
  clickmenu(e){
    var clickIndex = this.data.clickIndex;
     if(clickIndex==-1){
       return;
     }
    this.setData({
      clickIndex:-1,
    })
  },
  classifyMenu(e){
    var data=this.data;
    var selectmenu = data.selectmenu;
    var clickIndex = data.clickIndex;
    var classifymenu =data.classifymenu;
    var index=e.currentTarget.dataset.menu;
    var obj={};
    if (clickIndex!=index){
      obj.clickIndex = index; 
      obj.selectmenu = classifymenu[index];
    }else{
      obj.clickIndex=-1;
    }
    this.setData(obj);
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title:'信用卡申请分享',
      desc:'申请信用卡，让更多的人体验信用卡带来的优质体验！',
      path:'/pages/index/index',
      content:'申请信用卡,快来人扫我'
    }
  },
  moveH5(e){
    const url=e.currentTarget.dataset.url;
    my.navigateTo({
      url:'/pages/h5/h5?webview='+url
    });
  },
  selectClassify(e){
    var classifyval=e.currentTarget.dataset.item;
    var oldclassifyval = this.data.classifyval;
    if (oldclassifyval===classifyval){
      return;
    }
    this.setData({
      classifyval: classifyval,
      clickIndex:-1
    })
  }
});
