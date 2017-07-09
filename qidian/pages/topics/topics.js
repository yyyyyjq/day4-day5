// pages/topics/topics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postsList:[],
    navList: [
      {
        id: "hot",
        title: "热门"
      },
      {
        id: "rank",
        title: "排行"
      },
      {
        id: "classify",
        title: "分类"
      },
      {
        id: "my",
        title: "我的"
      },
    ],
    image:[
    {
      img:"http://qidian.qpic.cn/qdbimg/349573/1009265821/90"
    },
    {
      img:"http://qidian.qpic.cn/qdbimg/349573/1005986994/90"
    },
    {
      img:"http://qidian.qpic.cn/qdbimg/349573/1004608738/90"
    },
  ],
    activeIndex: 0,
    hidden: false
  },
  gotohot:function () {
    wx.navigateTo({
      url:'../hot/hot'
    })
  },
  gotoclassify:function () {
    wx.navigateTo({
      url:'../classify/classify'
    })
  },
  gotorank:function () {
    wx.navigateTo({
      url:'../rank/rank'
    })
  },
  gotomy:function () {
    wx.navigateTo({
      url:'../my/my'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
