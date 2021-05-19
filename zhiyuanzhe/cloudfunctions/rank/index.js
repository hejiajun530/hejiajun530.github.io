// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
    // API 调用都保持和云函数当前所在环境一致
    env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {
    console.log(event)
    console.log(context)
    // const wxContext = await cloud.getWXContext();
    const { openid } = event;

    // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
    try {
        let result = {};
        let rankList = await db.collection('users').orderBy('langTime','desc').get();
        // return rankList;
        let userData = [];
        rankList.data.map((item, index) => {
            item.rank = index + 1;
            if (openid == item._openid) {
                userData = item;
            }
        })
        if (rankList.errMsg == 'collection.get:ok') {
            // && userData.errMsg == 'collection.get:ok'
            result = {
                code: 200,
                res: {
                    myrank: userData,
                    rankList: rankList.data
                },
                msg: '获取排名成功'
            }
        } else {
            result = {
                code: 250,
                res: {
                    myrank: userData,
                    rankList: rankList.data
                },
                msg: '获取排名失败'
            }
        }
        console.log('result', result);
        return result;
    } catch (err) {
        console.log('err', err);
        return err;
    }
}

