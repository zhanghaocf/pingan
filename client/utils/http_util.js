import Promise from './es6_promise.js'
function Request(options,page){
  !!page&&page.setData({
    isLoading: true
  })
  return new Promise((res,rej)=>{
    options.success=function(result){
      res(result)
    }
    options.fail = function(err) {
      rej(err)
    }
    my.request(options);
  })
}
//等到所有异步函数都执行完触发事件，arr数组都是promise对象
function promiseAll(arr, callback, page) {
  page.setData({
    isLoading: true
  });
  Promise.all(arr).then((val) => {
    page.setData({
      isLoading: false
    })
    callback&&callback(val);
  }).catch((val) => {
    page.setData({
      isLoading: false
    })
    val="发生错误,重新启动或是联系管理员";
    my.alert({
      title: '温馨提示',
      content:val
    })
  })
}
module.exports = {
  Request: Request,
  PromiseAll: promiseAll,
}