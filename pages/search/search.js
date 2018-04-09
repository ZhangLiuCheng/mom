// pages/search/search.js

var constants = require('../../utils/constants.js')

Page({

  data: {
    keyword: '',
    list: [],
    pageIndex: 0,
    pageSize: 20
  },

  onLoad: function (options) {
  },

  onReady: function () {
    this.infoViewModal = this.selectComponent("#infoViewModal");
    this.loadmoreViewModal = this.selectComponent("#loadmoreViewModal");
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
    this.data.pageIndex++;
    this.requestSearchList()
  },

  onShareAppMessage: function () {
  
  },

  detail: function (res) {
    let item = res.currentTarget.dataset.item
    wx.navigateTo({
      url: '../baikeDetail/baikeDetail?id=' + item.id + "&title=" + item.title,
    })
  },
  
  networkRetry: function () {
    this.requestSearchList()
  },

  onSearchCancel: function (e) {
    if (this.data.list.length == 0) {
      wx.navigateBack()
    }
  },

  onSearchTo: function (e) {
    this.data.keyword = e.detail
    this.data.pageIndex = 0
    this.requestSearchList()
  },

  refreshNewsData: function (data) {
    var newList = []
    if (this.data.pageIndex == 0) {
      newList = data
    } else {
      newList = this.data.list.concat(data)
    }
    this.setData({
      list: newList,
    })

    var empty = this.data.list.length <= 0;
    if (empty) {
      this.infoViewModal.showEmptyView('暂无数据')
    } else {
      this.infoViewModal.hideInfoView()
    }

    // 最后一页数据
    if (data.length < this.data.pageSize) {
      this.loadmoreViewModal.showEmptyView()
    }
    if (data.length == 0) {
      this.data.pageIndex--
    }
  },

  requestSearchList: function () {
    let that = this
    if (that.data.pageIndex == 0) {
      that.infoViewModal.showLoadingView()
    } else {
      that.loadmoreViewModal.showLoadingView()
    }
    var token = getApp().globalData.userToken
    var keyword = that.data.keyword
    wx.request({
      url: constants.searchList,
      data: {
        pageIndex: that.data.pageIndex,
        pageSize: that.data.pageSize,
        token: token,
        keyword: keyword
      },
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        if (res.statusCode == 200 && res.data.code == 0) {
          var list = res.data.data;
          that.refreshNewsData(list)
        } else {
          requestFail(res)
        }
      },
      fail: function (res) {
        requestFail(res)
      }
    })

    function requestFail(res) {
      if (that.data.pageIndex == 0) {
        that.infoViewModal.showErrorView()
      } else {
        that.data.pageIndex--
        that.loadmoreViewModal.showErrorView()
      }
    }
  }
})