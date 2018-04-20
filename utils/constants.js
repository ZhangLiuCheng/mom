
const host = 'https://mom.bestcircler.com/v1/'

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