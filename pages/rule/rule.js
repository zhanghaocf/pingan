const app=getApp();
Page({
  data:{
    userInfo: null,
  },
  onLoad(){
    this.setData({
      userInfo: app.globalData.userInfo
    })
    if (my.hideShareMenu) {
      my.hideShareMenu();
    }
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '信用卡申请分享',
      desc: '申请信用卡，让更多的人体验信用卡带来的优质体验！',
      path: '/pages/index/index',
      content: '申请信用卡,快来人扫我'
    }
  },
  returnFn() {
    my.navigateBack({})
  },
  enterRule(){
    var options = {
      content: '您已在活动规则页中',
      icon: 'none'
    }
    my.showToast(options)
  }
})