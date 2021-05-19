// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

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
    // let { nick, avator, phone, role, sex, createTime } = event;

    // 可执行其他自定义逻辑
    // console.log 的内容可以在云开发云函数调用日志查看

    // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
    const wxContext = await cloud.getWXContext();

    // return {
    //   event,
    //   openid: wxContext.OPENID,
    //   appid: wxContext.APPID,
    //   unionid: wxContext.UNIONID,
    //   env: wxContext.ENV,
    // }
    let { nick, avator, phone, role, sex, langTime } = event;

    // 可执行其他自定义逻辑
    // console.log 的内容可以在云开发云函数调用日志查看

    // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
    try {
        let result = {};
        let loginFlag = await db.collection('users').where({_openid: wxContext.OPENID}).get();
        // return loginFlag;
        if (loginFlag.errMsg == 'collection.get:ok' && loginFlag.data.length) {
            result = {
                code: 200,
                res: loginFlag.data[0],
                msg: '登录成功'
            }
            return result;
        }
        let data = await db.collection('users').add({
            data: {
                _openid: wxContext.OPENID || '',
                nick: nick || '',
                avator: avator || '',
                phone: phone || '',
                role: role || '',
                sex: sex || '',
                langTime: langTime || 0,
                createTime: new Date(),
            }
        })
        // let data = await db.collection('users').get();//collection.get:ok  不同的方法collection.不一样
        let userData = await db.collection('users').where({_openid: wxContext.OPENID}).get();
        if (data.errMsg == 'collection.add:ok') {
            result = {
                code: 200,
                res: userData.data[0],
                msg: '登录成功'
            }
        } else {
            result = {
                code: 250,
                res: userData.data[0],
                msg: '登录失败'
            }
        }
        console.log('result', result);
        return result;
        // return await db.collection('users').get()
    } catch (err) {
        console.log('err', err);
    }
}

