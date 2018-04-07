
var constants = require('constants.js')

// 百科分类
var requestMom = function (listener) {
  var app = getApp()
  wx.request({
    method: "GET",
    url: constants.queryCategory,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.statusCode == 200 && res.data.code == 0) {
        listener(true, res.data.data)
      } else {
        listener(false, res.data.message == undefined ? "服务器异常" : res.data.message)
      }
    },
    fail: function (res) {
      listener(false, '网络或服务器异常')
    }
  })
}

module.exports = {
  requestMom: requestMom
}
