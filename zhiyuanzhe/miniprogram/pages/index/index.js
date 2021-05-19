//index.js
const app = getApp()

Page({
    data: {
        avatarUrl: './user-unlogin.png',
        userInfo: {},
        hasUserInfo: false,
        logged: false,
        takeSession: false,
        requestResult: '',
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl'), // 如需尝试获取用户信息可改为false
        bigImg: '',
    },

    onLoad: function () {
        if (!wx.cloud) {
            wx.redirectTo({
                url: '../chooseLib/chooseLib',
            })
            return
        }
        // if (wx.getUserProfile) {
        //   this.setData({
        //     canIUseGetUserProfile: true,
        //   })
        // }
    },

    getUserProfile() {
        console.log(wx.getUserProfile);
        if (wx.getUserProfile) {
            // this.setData({
            //   canIUseGetUserProfile: true,
            // })
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            wx.getUserProfile({
                desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    this.setData({
                        avatarUrl: res.userInfo.avatarUrl,
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    })
                    console.log(res.userInfo);
                    this.onGetOpenid();
                }
            })
        }
    },

    onGetUserInfo: function (e) {
        if (!this.data.logged && e.detail.userInfo) {
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                userInfo: e.detail.userInfo,
                hasUserInfo: true,
            })
        }
    },

    onGetOpenid: function () {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'login',
            data: {
                nick: this.data.userInfo.nickName,
                avator: this.data.userInfo.avatarUrl,
                phone: '',
                role: '',
                sex: this.data.userInfo.gender,
            },
            success: res => {
                console.log('[云函数] [login]-数据', res)
            },
            fail: err => {
                console.error('[云函数] [login] 调用失败', err)
            }
        })
    },

    // 上传图片
    doUpload: function () {
        let that = this;
        // 选择图片
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                wx.showLoading({
                    title: '上传中',
                })

                const filePath = res.tempFilePaths[0]

                // 上传图片
                const cloudPath = `userPhoto/my-image${filePath.match(/\.[^.]+?$/)[0]}`
                wx.cloud.uploadFile({
                    cloudPath,
                    filePath,
                    success: res => {
                        console.log('[上传文件] 成功：', res)

                        app.globalData.fileID = res.fileID
                        app.globalData.cloudPath = cloudPath
                        app.globalData.imagePath = filePath
                        that.setData({
                            bigImg: res.fileID
                        })

                        // wx.navigateTo({
                        //     url: '../storageConsole/storageConsole'
                        // })
                    },
                    fail: e => {
                        console.error('[上传文件] 失败：', e)
                        wx.showToast({
                            icon: 'none',
                            title: '上传失败',
                        })
                    },
                    complete: () => {
                        wx.hideLoading()
                    }
                })
            },
            fail: e => {
                console.error(e)
            }
        })
    },

    // 修改信息
    updateUser() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'updateUser',
            data: {
                openid: 'o-Olp5DLatrIKTHwYCaYrD7O8aus',
                nick: '潭州',
                avator: this.data.userInfo.avatarUrl,
                phone: '15300001111',
                role: '',
                sex: '女',
            },
            success: res => {
                console.log('[云函数] [updateUser]-数据', res)
            },
            fail: err => {
                console.error('[云函数] [updateUser] 调用失败', err)
            }
        })
    },

    // 获取排名
    getRank() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'rank',
            data: {
                openid: 'o-Olp5DLatrIKTHwYCaYrD7O8aus'
            },
            success: res => {
                console.log('[云函数] [rank]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [rank] 调用失败', err)
            }
        })
    },

    // 发布活动
    release() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'release',
            data: {
                opendid: 'o-Olp5DLatrIKTHwYCaYrD7O8aus',
                name: '湖南信息学院看门',
                type: '其他',
                recruitStartTime: '2020-01-01',
                recruitEndTime: '2020-02-01',
                recruitNum: '13',
                activeStartTime: '2020-01-01 12:00:00',
                activeEndTime: '2020-01-01 15:30:00',
                nick: '陈登斌',
                phone: '1438438666',
                address: '湖南省长沙市星沙区',
                lat: '123',//经度
                log: '79',//纬度
                introduce: '看门你就来!',
            },
            success: res => {
                console.log('[云函数] [release]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [release] 调用失败', err)
            }
        })
    },

    // 获取活动列表
    getActive() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'getActive',
            data: {},
            success: res => {
                console.log('[云函数] [getActive]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [getActive] 调用失败', err)
            }
        })
    },

    // 删除活动
    delActive() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'delActive',
            data: {
                id: 'b00064a760a0b78517dfc3ff4f5d1cbe'
            },
            success: res => {
                console.log('[云函数] [delActive]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [delActive] 调用失败', err)
            }
        })
    },

    // 修改活动
    updateActive() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'updateActive',
            data: {
                id: '79550af260a0b8ff173ceacf1c764e8e',
                name: '湖南信息学院看门22222222',
                type: '其他12131241434',
                recruitStartTime: '2020-01-01',
                recruitEndTime: '2020-02-01',
                recruitNum: '13',
                activeStartTime: '2020-01-01 12:00:00',
                activeEndTime: '2020-01-01 15:30:00',
                nick: '狗比',
                phone: '1438438666',
                address: '湖南省长沙市星沙区11111222222211',
                lat: '123',//经度
                log: '79',//纬度
                introduce: '看门你就来!11111111231233455555555555555',
            },
            success: res => {
                console.log('[云函数] [updateActive]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [updateActive] 调用失败', err)
            }
        })
    },

    // 获取活动详情
    getDetail() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'getDetail',
            data: {
                id: '79550af260a0b8ff173ceacf1c764e8e'
            },
            success: res => {
                console.log('[云函数] [getDetail]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [getDetail] 调用失败', err)
            }
        })
    },

    // 参加活动
    join() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'join',
            data: {
                // id: '79550af260a0b8ff173ceacf1c764e8e'
                opendid: 'o-Olp5DLatrIKTHwYCaYrD7O8aus',
                activeId: '79550af260a0b8ff173ceacf1c764e8e',
                activeNum: 13,
            },
            success: res => {
                console.log('[云函数] [join]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [join] 调用失败', err)
            }
        })
    },

    // 退出活动
    out() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'out',
            data: {
                // id: '79550af260a0b8ff173ceacf1c764e8e'
                opendid: 'o-Olp5DLatrIKTHwYCaYrD7O8aus',
                activeId: '79550af260a0b8ff173ceacf1c764e8e',
            },
            success: res => {
                console.log('[云函数] [out]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [out] 调用失败', err)
            }
        })
    },

    // 获取参加的活动列表
    mejoin() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'mejoin',
            data: {
                // id: '79550af260a0b8ff173ceacf1c764e8e'
                opendid: 'o-Olp5PyMO7S16CmMvTpuD1NUXtE',
            },
            success: res => {
                console.log('[云函数] [mejoin]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [mejoin] 调用失败', err)
            }
        })
    },

    // 获取发布的活动列表
    relActive() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'relActive',
            data: {
                opendid: 'o-Olp5DLatrIKTHwYCaYrD7O8aus',
            },
            success: res => {
                console.log('[云函数] [relActive]-数据', res);
            },
            fail: err => {
                console.error('[云函数] [relActive] 调用失败', err)
            }
        })
    },

    // 挑战请假页面
    toVacation() {
        wx.navigateTo({
            url: '/pages/vacation/vacation'
        })
    },

})
