// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count1: 99,
    count2: 998,
    like: true,
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLink (event) {
      this.setData({like: !this.data.like})
    }
  }
})
