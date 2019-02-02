Page({
  data:{
    webview:''
  },
  onLoad(options){
    this.setData({
      webview: options.webview
    })
    if (my.hideShareMenu){
      my.hideShareMenu();
    }
  }
})