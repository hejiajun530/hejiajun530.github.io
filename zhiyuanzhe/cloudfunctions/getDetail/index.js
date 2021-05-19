// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
    // API 调用都保持和云函数当前所在环境一致
    env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

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
    const { id } = event;
    try {
        let result = {};
        let data = await db.collection('active').doc(id).get();
        let list = await db.collection('actjoin').where({
            activeId: id
        }).get();
        let userlist = await db.collection('users').get();
        let datalist = [];
        list.data.map(async (item, index) => {
            let id1 = item._openid;
            temp = userlist.data.filter((num, i) => {
                return id1 == num._openid;
            })
            datalist.push(temp[0]);
            // activelist = await db.collection('active').doc(item.activeId).get();
        })
        console.log('datalist',datalist);
        if (data.errMsg == 'document.get:ok') {
            result = {
                code: 200,
                res: data,
                userlist: datalist,
                msg: '获取详情成功'
            }
        } else {
            result = {
                code: 250,
                res: data,
                userlist: datalist,
                msg: '获取详情失败'
            }
        }
        console.log('result', result);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
}