App({
  globalData: {
    isPhoneX: false,
    domainName:'https://app2124584908test.mapp-test.xyz'
  },
  userInfo: null,
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);

          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
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
  onLaunch() {
    var isPhoneX = my.getSystemInfoSync().model.indexOf("iPhone X") > -1;
    this.globalData.isPhoneX = isPhoneX;
  }
});
