// var host = 'http://192.168.1.105:8080/mom/v1/'
var host = 'https://www.bestcircler.com/mom/v1/'

module.exports = {

  /**
   * 查询分类
   */
  queryCategory: host + 'queryCategory',

  /**
   * 查询具体分类列表
   * kindId
   */
  queryItem: host + 'queryItem',

  /**
  * 查询详情
  * itemId
  */
  queryDetail: host + 'queryDetail',

  /**
   * 热门关键词
   */
  searchHotKeyword: host + 'queryHots',

  /**
   * 搜索列表
   * keyword
   */
  searchList: host + 'queryKeyword',
}