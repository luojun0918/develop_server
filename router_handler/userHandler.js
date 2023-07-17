/**
 * @description 用户信息路由处理函数模块
 */

// 引入数据库模块
const db = require('../db/index');

// 查找用户信息
exports.getUser = (req, res) => {
    let inputParams = req.body;
    // if ((!inputParams.username || inputParams.username == '') || (!inputParams.password || inputParams.password == '')) {
    //     return res.send({ status: '-9999', message: '用户名、密码不存在或者不合法！' });
    // }
    let sql = 'delete from user_info where id=?';
    db.query(sql, [inputParams.id], (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.send({ status: 1, message: err.message })

        res.send({ status: 0, message: '删除成功！' })
    })
}