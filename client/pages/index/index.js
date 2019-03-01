const app = getApp();
import httpurl from '../../utils/http_util';
Page({
  data: {
    bannerList:[],
    isLoading:false,
    adver:null,
    cardList:[],
    descList:[],
    footer:[],
    isshow: false,
    isPhoneX: false
  },
  totalHttp(){
    let arr=[this.getBannerHttp(),this.getAdverHttp(),this.getCardList(),this.getDescList(),this.getMenu()];
    httpurl.PromiseAll(arr,null,this);
  },
  getMenu(){
    let domainName = app.globalData.domainName;
    var options={
      url: `${domainName}/getMenu`, // 目标服务器url
    }
    return httpurl.Request(options,this).then((res)=>{
        this.setData({
          footer:res.data.list
        })
        return res;
    })
  },
  getDescList(){
    let domainName = app.globalData.domainName;
    var options={
      url: `${domainName}/getDescList`, // 目标服务器url
    }
    return httpurl.Request(options,this).then((res)=>{
        this.setData({
          descList:res.data.list
        })
        return res;
    })
  },
  getCardList(){
    let domainName = app.globalData.domainName;
    var options={
      url: `${domainName}/getCardList`, // 目标服务器url
    }
    return httpurl.Request(options,this).then((res)=>{
        this.setData({
          cardList:res.data.list
        })
        return res;
    })
  },
  getBannerHttp(){
    let domainName = app.globalData.domainName;
    var options={
      url: `${domainName}/getBannerList`, // 目标服务器url
    }
    return httpurl.Request(options,this).then((res)=>{
      this.setData({
          bannerList: res.data.list
        })
        return res;
    })
  },
  getAdverHttp(){
    let domainName = app.globalData.domainName;
    var options={
      url: `${domainName}/getAdvertisement`, // 目标服务器url
    }
    return httpurl.Request(options,this).then((res)=>{
        let data=res.data.res;
        let adver=data.length>0?data[0]:null;
        this.setData({
          adver
        })
        return res;
    })
  },
  onLoad() {
    this.setData({
      isPhoneX:app.globalData.isPhoneX
    });
    this.totalHttp();
  },
  moveH5(e){
    const url=e.currentTarget.dataset.url;
    my.navigateTo({
      url:'/pages/h5/h5?webview='+url
    });
  },
  showWrap(){
    var isshow=!this.data.isshow;
    this.setData({
      isshow: isshow
    })
  },
  closeopera(){
    var isshow = this.data.isshow;
    if (!isshow){
      return;
    }
    this.setData({
      isshow: false
    })
  }
});
