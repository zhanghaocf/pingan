App({
  globalData:{
    isPhoneX:false,
    domainName:'https://rongmo.zhgroot.cn/tp5rongmo/public'
  },
  onLaunch(){
    var model = my.getSystemInfoSync().model;
    var reg = /iphone10|iPhone X/i;
    var isPhoneX = reg.test(model);
    this.globalData.isPhoneX = isPhoneX;
  }
});
