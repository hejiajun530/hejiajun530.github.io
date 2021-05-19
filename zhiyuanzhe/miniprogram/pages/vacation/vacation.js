// miniprogram/pages/vacation/vacation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vacationList: [
            {
                title: '清明节放假回家',
                type: '事假',
                startTime: '2021-04-02 12:10',
                endTime: '2021-04-05 20:10',
                status: '1',
                value: 82,
                gradientColor: {
                    '0%': '#f7b38e',
                    '100%': '#f7b38e',
                }
            },
            {
                title: '劳动节放假回家劳动节放假回家',
                type: '事假',
                startTime: '2021-04-02 12:10',
                endTime: '2021-04-05 20:10',
                status: '0',
                value: 100,
                gradientColor: {
                    '0%': '#8a8d92',
                    '100%': '#676767',
                }
            },
        ],
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

    },

    //   挑战页面
    toUrl() {
        wx.navigateTo({
            url: '/pages/index/index'
        })
    },
})