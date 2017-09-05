#!/usr/bin/env node

var program = require('commander');
var fs = require('fs-extra')
var path = require('path');
// var exec = require('child_process').exec;

program
  .version('0.4.0')
  .option('-i, --info about author', '查看作者信息')
  .option('-l, --list', '列出全部可用脚手架')
  // .option('-t, --type <type>', '设置脚手架类型');

program
  .command('new [objDirPath]')
  .description('创建新项目')
  .option("-t, --setup_type [type]", "Which setup type to use")
  .action(function(objDirPath, options){

    var type = options.setup_type || "react";
    objDirPath = objDirPath || './'

    console.log(type, objDirPath)

    var templates = path.join(__dirname, type)

    fs.copySync(templates, objDirPath)

    console.log('创建完成！')

    var nextCommond = `cd ${objDirPath} && cnpm i`

    console.log('请执行：' + nextCommond)

    // exec(nextCommond, function(err,stdout,stderr){
    //   console.log('wwww')
    //     if(err) {
    //         console.log('get weather api error:'+stderr);
    //     } else {
    //         var data = JSON.parse(stdout);
    //         console.log(data);
    //     }
    // });

  });


program.parse(process.argv);


// const run = (c) => {
//   if (c === '-v') {
//     console.log('0.4.0');
//   }
// }

// var commend = process.argv[2]
// var dirName = process.argv[3] || './'
// var objDir = process.argv[4] || 'react'

// var templates = path.join(__dirname, objDir)

// if (commend === 'new') {
//   console.log('正在生成模板：'+objDir)
//   fs.copySync(templates, dirName)
//   switch (objDir) {
//     case 'react':
//       try {
//           console.log('初始化完成!')
//           console.log('安装依赖：       cnpm i')
//           console.log('编译动态链接库：npm run dll')
//           console.log('开启编辑模式：    npm start')
//           console.log('打包项目：       npm run build')
//       } catch (err) {
//           console.error(err)
//       }
//     break;
//     case 'next':
//       try {
//           console.log('初始化完成!')
//           console.log('安装依赖：       cnpm i')
//           console.log('开启编辑模式：   npm run dev')
//           console.log('编译项目：       npm run build')
//           console.log('运行项目：       npm start')
//       } catch (err) {
//           console.error(err)
//       }
//     break;
//     default:
//         console.log('不能没有参数啊，你总得告诉我干啥吧！比如：')
//         console.log('cat-cli new test')
//     break;
//   }
// }


// //获取除第一个命令以后的参数，使用空格拆分
// run(process.argv.slice(2));
