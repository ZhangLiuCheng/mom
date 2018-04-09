// pages/baikeList/baikeList.js

let http = require('../../utils/http.js')

Page({
  data: {
    kindId: '',
    list: []
  },

  onLoad: function (options) {
      this.data.kindId = options.id
      wx.setNavigationBarTitle({
        title: options.title,
      })
  },

  onReady: function () {
    this.infoViewModal = this.selectComponent("#infoViewModal");
    this.requestItems()
  },

  onPullDownRefresh: function () {
    this.requestItems()
  },

  onShareAppMessage: function () {
  
  },

  networkRetry: function () {
    this.requestItems()
  },

  detail: function (res) {
    let item = res.currentTarget.dataset.item
    wx.navigateTo({
      url: '../baikeDetail/baikeDetail?id=' + item.id + "&title=" + item.title,
    })
  },

  requestItems: function() {
    var that = this
    if (this.data.length == 0) {
      this.infoViewModal.showLoadingView()
    }
    http.requestItems(this.data.kindId, function (success, result) {
      wx.stopPullDownRefresh()
      if (success) {
        if (result.length <= 0) {
          that.infoViewModal.showEmptyView('暂无数据')
        } else {
          that.infoViewModal.hideInfoView()
          that.setData({
            list: result
          })
        }
      } else {
        that.infoViewModal.showErrorView()
      }
    })
  }
})