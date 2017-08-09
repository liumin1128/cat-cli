#!/usr/bin/env node

var fs = require('fs-extra')
var path = require('path');

var commend = process.argv[2]
var dirName = process.argv[3] || './'
var objDir = process.argv[4] || 'react'

var templates = path.join(__dirname, objDir)

if (commend === 'new') {
  console.log('正在生成模板：'+objDir)
  fs.copySync(templates, dirName)
  switch (objDir) {
    case 'react':
      try {
          console.log('初始化完成!')
          console.log('安装依赖：       cnpm i')
          console.log('编译动态链接库：npm run dll')
          console.log('开启编辑模式：    npm start')
          console.log('打包项目：       npm run build')
      } catch (err) {
          console.error(err)
      }
    break;
    case 'next':
      try {
          console.log('初始化完成!')
          console.log('安装依赖：       cnpm i')
          console.log('开启编辑模式：   npm run dev')
          console.log('编译项目：       npm run build')
          console.log('运行项目：       npm start')
      } catch (err) {
          console.error(err)
      }
    break;
    default:
        console.log('不能没有参数啊，你总得告诉我干啥吧！比如：')
        console.log('cat-cli new test')
    break;
  }
}


