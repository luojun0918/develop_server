// 导入express
const express = require('express');

// 创建服务器的实例对象
const app = express();

// 配置cors跨域
const cors = require('cors');
app.use(cors());

// 配置解析表单数据中间件
app.use(express.urlencoded({ extended: false }));

// 引入路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);

// 启动服务器
app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007');
})