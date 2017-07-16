### 编写一个基于node.js的cli工具

你还在为工作效率低烦恼吗？

你还在为脚手架难用抱怨吗？

你还在为webpack、babel、eslint、sass伤脑筋吗？

在这里，我告诉你加速开发的秘密  —— 一个基于webpack3，react15，react-router4，redux，redux-saga的cli工具。

**准备工作**

先上官网搜你想创建的npm包，名字有没有被占用。[https://www.npmjs.com](https://www.npmjs.com)

找到有个可用的名字就去github创建仓库。[https://github.com](https://github.com)

克隆到本地并使用npm初始化。

```
git clone https://github.com/abcd/1234.git

npm init
```

此处可以一路回车到底，以后随时能改。

一路回车后得到`package.json`文件

**修改package.json**

* 删除` "main": "index.js"`，cli工具不需要被引用。

* 增加`"preferGlobal": true`，要求用户使用全局安装。

* 配置"bin"字段，便于在控制台执行你的命令。

```
{
  "name": "cat-cli",
  "version": "0.0.1",
  "description": "a good scaffold",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "cat-cli": "./index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/liumin1128/cat-cli.git"
  },
  "keywords": [
    "scaffold"
  ],
  "preferGlobal": true,
  "author": "liumin",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/liumin1128/cat-cli/issues"
  },
  "homepage": "https://github.com/liumin1128/cat-cli#readme"
}
```

**脚本文件**

创建`index.js`，思路就是在templates文件夹中准备好要用到的文件，然后用copy方法将文件拷贝一份即可。记得在文件头部加上`#!/usr/bin/env node`，告知shell这个文件在node环境下运行。

```
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
        console.log('不能没有参数啊，你总得告诉我干啥吧！比如：')
        console.log('cat-cli new test')
    break;
}
```

这里为了方便copy整个templates文件夹，我们引用了`fs-extra`包，使用起来还是十分舒服的。

**参数获取**

说好了是cli工具，接受参数是必须的。在node中，命令行参数通过process.argv来获取，第一项为node.exe的绝对路径，第二项为执行该js的绝对路径，后面的是用户添加的参数。当检测到用户提交的参数是`new`时，就去复制模板文件。

**本地安装**

```
sudo npm install -g
```

**发布到npm**

```
npm publish
```

**后记**

本项目github仓库：[https://github.com/liumin1128/cat-cli.git](https://github.com/liumin1128/cat-cli.git)

本项目npm主页：[https://www.npmjs.com/package/cat-cli](https://www.npmjs.com/package/cat-cli)


