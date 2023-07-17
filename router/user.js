 // 导入express
const express = require('express');

// 创建路由对象
const router = express.Router();

// 导入用户路由模块
const userHandler = require('../router_handler/userHandler');

router.post('/user', userHandler.getUser);

// 提供路由方法
module.exports = router;