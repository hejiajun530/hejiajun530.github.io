// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
    // API 调用都保持和云函数当前所在环境一致
    env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    console.log(event);
    
    // 活动名称  name
    // 活动类型  type
    // 招募时间  recruitStartTime,recruitEndTime
    // 招募人数  recruitNum
    // 活动时间  activeStartTime,activeEndTime
    // 发布人员  nick
    // 联系电话  phone
    // 地址/经纬度  address,x,y
    // 活动介绍  introduce

    // 已报名志愿者  vlounteerList
    // 已招募人数  pepleoNum
    const {
        opendid,
        activeId,
        activeNum
     } = event;
    try {
        let result = {};
        let dataStr = {
            _openid: opendid || '',
            activeId: activeId || '',
            activeNum: activeNum || 1,
        }
        let joinFlag = await db.collection('actjoin').where(db.command.and([{
            _openid: opendid
        }, {
            activeId: activeId
        }])).get();
        let active = await db.collection('active').doc(activeId).get();
        let start = new Date(active.data.activeStartTime).getTime();
        let end = new Date(active.data.activeEndTime).getTime();
        let down = (end - start) / 1000 / 60 / 60;
        console.log(active.data, start, end, down);
        let user = await db.collection('users').where({
            _openid: opendid
        }).get();
        console.log('user', user);
        down = down + parseFloat(user.data[0].langTime);
        await db.collection('users').where({
            _openid: opendid
        }).update({
            data: {
                langTime: down
            },
            success: function(res) {
                console.log('uers-opendid', res);
            },
            fail: function(err) {
                console.log('err-users', err);
            }
        });
        if (joinFlag.errMsg == 'collection.get:ok' && joinFlag.data.length) {
            result = {
                code: 200,
                res: joinFlag.data,
                msg: '已参加该活动'
            }
            return result;
        }
        // return
        console.log('joinFlag', joinFlag);
        let data = await db.collection('actjoin').add({
            data: dataStr
        });
        if (data.errMsg == 'collection.add:ok') {
            result = {
                code: 200,
                res: dataStr,
                msg: '参加活动成功'
            }
        } else {
            result = {
                code: 250,
                res: dataStr,
                msg: '参加活动失败'
            }
        }
        console.log('result', result);
        return result;
    } catch (err) {
        console.log('err', err);
        return err;
    }
}