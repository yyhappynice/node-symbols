## Welcome to use node-symbols

### Install

------

```js
$ npm install node-symbols -S
```

### Quick Start

------

```js
const symbols = require('node-symbols')
console.log(symbols('music', 'red') + ' ' + '~~~')
// ♬ ~~~
```
### API

------

```js
symbols(bol, color)
```

#### bol (string | required)
* tick ✔
* cross ✖
* square ▇
* info ℹ
* warning ⚠
* smiley ❅
* warning ㋡
* heart ♥
* circleCross ⓧ

learn you can check [figures](https://www.npmjs.com/package/figures)

------

#### color (string | Not required)
* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* gray
* redBright
* greenBright
* yellowBright
* blueBright
* magentaBright
* cyanBright
* whiteBright

 learn you can check [chalk API](https://www.npmjs.com/package/chalk)

------

### License
[MIT](https://github.com/yyhappynice/node-symbols/blob/master/LICENSE)