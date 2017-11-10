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
```js
symbols(bol, color)
```

#### bol (string | required)
* success ✔
* music ♬
* error ✘
* mistake ✗
* stars ★
* snowflake ❅
* warning ⚠
* arrow ➜
* plane ✈
* Other symbols or Arbitrary string
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

you can use [chalk API](https://www.npmjs.com/package/chalk)
### License
[MIT](https://github.com/yyhappynice/node-symbols/blob/master/LICENSE)