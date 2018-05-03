// pages/baikeList/baikeList.js

let http = require('../../utils/http.js')
let audio = require('../../utils/audio.js')

Page({
  data: {
    momTitle: '',
    moldTitle: '',
    kindId: '',
    list: []
  },

  onLoad: function (options) {
    this.data.kindId = options.id
    this.setData({
      momTitle : options.momTitle,
      moldTitle: options.moldTitle
    })
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
    audio.playMenuAudio();
    let item = res.currentTarget.dataset.item
    wx.navigateTo({
      url: '../baikeDetail/baikeDetail?id=' + item.id + "&title=" + item.title,
    })
  },

  requestItems: function () {
    var that = this
    if (this.data.list.length == 0) {
      this.infoViewModal.showLoadingView()
    }
    http.requestItems(this.data.kindId, function (success, result) {
      wx.stopPullDownRefresh()
      console.log(result)
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