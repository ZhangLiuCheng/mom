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
   * 热门关键词
   * token
   */
  searchHotKeyword: host + 'hotSearch/query',

  /**
   * 搜索列表
   * keyword
   */
  searchList: host + 'news/search',
}