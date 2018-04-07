//index.js
Page({
  data: {
    currentItem: null,
    list: [
      {
        "id": 1,
        "title": '备孕',
        "mold": [
          {
            'id': "1",
            'title': '女性孕前检查项目',
            'kind': [
              {
                'id': '1',
                'title':'单纯疱疹病毒',
                'img':'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '2',
                'title': '风疹',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '3',
                'title': '胸透',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '4',
                'title': '脱畸全套',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              }
            ]
          },

          {
            'id': "2",
            'title': '如何受孕',
            'kind': [
              {
                'id': '1',
                'title': '单纯疱疹病毒',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '2',
                'title': '风疹',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '3',
                'title': '胸透',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              }
            ]
          },
          {
            'id': "1",
            'title': '男性孕前检查项目',
            'kind': [
              {
                'id': '1',
                'title':'单纯疱疹病毒阿斯顿发送到',
                'img':'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '2',
                'title': '风疹',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '3',
                'title': '胸透',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              },
              {
                'id': '4',
                'title': '脱畸全套',
                'img': 'https://www.bestcircler.com/pic/formal/basic/2018/03/26/fb58d9d5-46f3-452f-b4d2-23022ceeab37.jpg'
              }
            ]
          },
        ]
      },
      {
        "id": 2,
        "title": '怀孕',
        "mold": [
          {
            'id': "1",
            'title': '怀孕反应'
          },

          {
            'id': "2",
            'title': '孕早期'
          }
        ]
      },
      {
        "id": 3,
        "title": '分娩',
        "mold": [
          {
            'id': "1",
            'title': '女性孕前检查项目'
          },

          {
            'id': "2",
            'title': '如何受孕'
          }
        ]
      },
      {
        "id": 4,
        "title": '月子',
        "mold": [
          {
            'id': "1",
            'title': '女性孕前检查项目'
          },

          {
            'id': "2",
            'title': '如何受孕'
          }
        ]
      },
      {
        "id": 5,
        "title": '宝宝培育',
        "mold": [
          {
            'id': "1",
            'title': '女性孕前检查项目'
          },

          {
            'id': "2",
            'title': '如何受孕'
          }
        ]
      }
    ]
  },

  onLoad: function () {
    let item = this.data.list[0]
    this.setData({
      currentItem: item
    })
  },

  tabListener: function (res) {
    let item = res.currentTarget.dataset.item
    this.setData({
      currentItem: item
    })
  }
})
