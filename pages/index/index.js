Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，data：', e.detail.value.input)

    // 构造请求参数
    let postdata = {
      "text": "留言",
      "desp": e.detail.value.input
    };
    // 发送POST请求
    wx.request({
      url: 'https://iyuu.cn/IYUU33007T0afb10977c3019312aa4c57c12b00fa9efb8d736.send',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: postdata,
      success: function (res) {
        console.log(res.data); // 请求成功后的回调函数，res.data为服务器返回的数据
        wx.showToast({
          title: '发送成功',
          mask: true,
          duration: 2000
        })
      },
      fail: function (err) {
        console.log('请求失败：' + err); // 请求失败后的回调函数
        wx.showToast({
          title: '发送失败，请重新发送',
          mask:true,
          duration: 2000
        })
      },
      // 解决SSL证书验证失败的问题
      ssl: {
        verifyPeer: false,
        verifyPeerName: false
      }
    });
  }
})