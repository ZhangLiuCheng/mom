
var showToast = function (msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1500
  })
}
/**
 * 格式化首页列表格式.
 */
var formatNewsType = function (originNews) {
  for (var i = 0; i < originNews.length; i++) {
    var item = originNews[i]
    var imageSize = item.images.length
    if (imageSize < 3) {
      item.type = imageSize;
    } else if (imageSize == 3) {
      item.type = 2;
    } else if (imageSize > 3) {
      item.type = 4;
    }
    // 拷贝图片地址
    var showImageUrls = [];
    for (var j = 0; j < item.type; j++) {
      showImageUrls[j] = item.images[j]
    }
    item.showImageUrls = showImageUrls;
  }
  return originNews;
}

Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

var shareData = function () {
  return {
    title: '孕妈妈必备的宝典！',
    path: '/pages/index/index',
    imageUrl: '/images/icon.png'
  }
}

module.exports = {
  showToast: showToast,
  formatNewsType: formatNewsType,
  shareData: shareData
}
