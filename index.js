#!/usr/bin/env node

var fs = require('fs-extra')
var path = require('path');

var commend = process.argv[2]
var dirName = process.argv[3]

var templates = path.join(__dirname, 'templates')

switch (commend) {
    case 'new':
        try {
            fs.copySync(templates, dirName)
            console.log('初始化完成!')
            console.log('编译动态链接库：npm run dll')
            console.log('开启编辑模式：  npm start')
            console.log('打包项目：     npm run build')
        } catch (err) {
            console.error(err)
        }
    break;
    default:
        console.log('第一个参数不能为空，你总得告诉我干啥吧！')
    break;
}