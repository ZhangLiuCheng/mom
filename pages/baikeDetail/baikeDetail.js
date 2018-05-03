// pages/baikeDetail/baikeDetail.js

let http = require('../../utils/http.js')
let audio = require('../../utils/audio.js')

Page({

  data: {
    itemId: '',
    detail: {}
  },

  onLoad: function (options) {
    this.data.itemId = options.id
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },

  onReady: function () {
    this.infoViewModal = this.selectComponent("#infoViewModal");
    this.requestDetail()
  },

  onShareAppMessage: function () {

  },

  detail: function (res) {
    audio.playMenuAudio();
    let item = res.currentTarget.dataset.item
    wx.navigateTo({
      url: '../baikeDetail/baikeDetail?id=' + item.relateId + "&title=" + item.title,
    })
  },

  requestDetail: function () {
    var that = this
    this.infoViewModal.showLoadingView()
    http.requestDetail(this.data.itemId, function (success, result) {
      // console.log(result)
      wx.stopPullDownRefresh()
      if (success) {
        if (result.title == undefined) {
          that.infoViewModal.showEmptyView('页面不见了，请查看其他数据！')
        } else {
          that.infoViewModal.hideInfoView()
          that.setData({
            detail: result
          })
        }
      } else {
        that.infoViewModal.showErrorView()
      }
    })
  }
})