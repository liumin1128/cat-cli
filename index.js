#!/usr/bin/env node

const fs = require('fs-extra')
var path = require('path');


function copy (from, to) {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str, mode) {
  fs.writeFileSync(path, str)
}
function mkdir (path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}

console.log(process.argv);

var commend = process.argv[2]
var dirName = process.argv[3]


var templates = path.join(__dirname, 'templates')

console.log(templates)

switch (commend) {
    case 'new':
        try {
            fs.copySync(templates, dirName)
            console.log('初始化完成!')
        } catch (err) {
            console.error(err)
        }
    break;
    default:
        console.log('第一个参数不能为空，你总得告诉我干啥吧！')
    break;
}