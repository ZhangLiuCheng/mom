//index.js

var http = require('../../utils/http.js')

Page({
  data: {
    scrollTop : 0,
    currentItem: null,
    list: []
  },

  onLoad: function () {
    let item = this.data.list[0]
    this.setData({
      currentItem: item
    })

    var that = this
    http.requestMom(function (success, result) {
      console.log(result)
      if (success) {
        let item = result[0]
        that.setData({
          currentItem: item,
          list: result
        })
      }
    })
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
      url: '../baikeList/baikeList',
    })
  }
})
