// app.js
App({
 onLaunch:function(){
  setTimeout(() => {
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }, 2000);
 },
  globalData: {
    userInfo: null
  }
})
