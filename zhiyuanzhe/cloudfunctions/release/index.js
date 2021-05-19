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
        name,
        type,
        recruitStartTime,
        recruitEndTime,
        recruitNum,
        activeStartTime,
        activeEndTime,
        nick,
        phone,
        address,
        lat,//经度
        log,//纬度
        introduce,
        cover,
     } = event;
    try {
        let result = {};
        let dataStr = {
            _openid: opendid || '',
            cover: cover || '',
            name: name || '',
            type: type || '',
            recruitStartTime: recruitStartTime || '',
            recruitEndTime: recruitEndTime || '',
            recruitNum: recruitNum || '',
            activeStartTime: activeStartTime || '',
            activeEndTime: activeEndTime || '',
            nick: nick || '',
            phone: phone || '',
            address: address || '',
            lat: lat || '',//经度
            log: log || '',//纬度
            introduce: introduce || '',
        }
        let data = await db.collection('active').add({
            data: dataStr
        });
        if (data.errMsg == 'collection.add:ok') {
            result = {
                code: 200,
                res: dataStr,
                msg: '发布成功'
            }
        } else {
            result = {
                code: 250,
                res: dataStr,
                msg: '发布失败'
            }
        }
        console.log('result', result);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
}