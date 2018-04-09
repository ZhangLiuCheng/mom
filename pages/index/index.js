//index.js

const http = require('../../utils/http.js')

Page({
  data: {
    scrollTop : 0,
    currentItem: null,
    list: []
  },

  onLoad: function () {
    const that = this
    http.requestMom(function (success, result) {
      if (success) {
        let item = result[0]
        that.setData({
          currentItem: item,
          list: result
        })
      }
    })
  },

  onShareAppMessage: function () {

  },

  search: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  tabListener: function (res) {
    let item = res.currentTarget.dataset.item
    this.setData({
      scrollTop: 0,
      currentItem: item
    })
  },

  kindListener: function (res) {
    let kind = res.currentTarget.dataset.item
    wx.navigateTo({
      url: '../baikeList/baikeList?id=' + kind.id + '&title=' + kind.title,
    })
  }
})
