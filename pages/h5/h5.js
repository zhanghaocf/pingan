Page({
  data:{
    webview:''
  },
  onLoad(options){
    console.log(options.webview)
    this.setData({
      webview: options.webview
    })
    if (my.hideShareMenu){
      my.hideShareMenu();
    }
  }
})