Page({
  data: {
    webview: ''
  },
  onLoad(options) {
    if (my.hideShareMenu) {
      my.hideShareMenu();
    }
  },
  onShow() {
    var time = new Date().getTime();
    this.setData({
      webview: `https://zhgroot.cn?datime=${time}`
    })
  }
})