// pages/baikeDetail/baikeDetail.js
Page({

  data: {
  
  },

  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },

  onReady: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})