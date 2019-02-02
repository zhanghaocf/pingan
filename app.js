App({
  globalData:{
    userInfo: null
  },
  onLaunch(options) {
    // 小程序初始化
    this.globalData.userInfo = my.getStorageSync({ key: 'userInfo' }).data||null;
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.globalData.userInfo) { resolve(this.globalData.userInfo);}
      console.log(222);
      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);
          my.getAuthUserInfo({
            success: res => {
              console.log(res);
              this.globalData.userInfo = res;
              my.setStorage({
                key: 'userInfo',
                data: res
              });
              resolve(res);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },
});
