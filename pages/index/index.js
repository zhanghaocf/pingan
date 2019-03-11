const app = getApp();
const httpUrl = require("../../utils/http_util.js");
Page({
  data: {
    isLoading:false,
    bannerList:[],
    adver:null,
    cardList:[],
    descList:[],
    footer:[],
    // isshow: false,
     isPhoneX: false
  },
  onLoad() {
    this.setData({
      isPhoneX:app.globalData.isPhoneX
    })
    this.getDataHttp();
  },
  getBannerHttp(){
    let domain=app.globalData.domainName;
    return httpUrl.Get(domain+"/getBannerList",false,this,app).then(res=>{
      this.setData({
        bannerList:res
      });
      return res;
    })
  },
  getAdver(){
    let domain=app.globalData.domainName;
    return httpUrl.Get(domain+"/getAdver",false,this,app).then(res=>{
      this.setData({
        adver:res
      });
      return res;
    })
  },
  getCardList(){
    let domain=app.globalData.domainName;
    return httpUrl.Get(domain+"/getCardList",false,this,app).then(res=>{
      this.setData({
        cardList:res
      });
      return res;
    })
  },
  getYouhui(){
    let domain=app.globalData.domainName;
    return httpUrl.Get(domain+"/getYouhui",false,this,app).then(res=>{
      this.setData({
        descList:res
      });
      return res;
    })
  },
  getMenu(){
    let domain=app.globalData.domainName;
    return httpUrl.Get(domain+"/getMenu",false,this,app).then(res=>{
      this.setData({
        footer:res
      });
      return res;
    })
  },
  getDataHttp(){
    let arr=[this.getBannerHttp(),this.getAdver(),this.getCardList(),this.getYouhui(),this.getMenu()];
    return httpUrl.PromiseAll(arr,null,this);
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
