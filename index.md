## Welcome to use node-symbols
![build](https://img.shields.io/travis/rust-lang/rust.svg)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)
![stars](https://img.shields.io/amo/stars/dustman.svg)
![npm](https://img.shields.io/npm/v/node-symbols.svg)
![download](https://img.shields.io/npm/dt/node-symbols.svg)
### Install

------

```js
$ npm install node-symbols -S
```

### Quick Start

------

```js
const symbols = require('node-symbols')
console.log(symbols('tick', 'green') + ' ' + 'green~~~')
// ✔ green~~~
console.log(symbols('cross', 'red') + ' ' + 'red~~~')
// ✖ red~~~
console.log(symbols('smiley', 'blue') + ' ' + 'blue~~~')
// ㋡ blue~~~
console.log(symbols('other string', 'gray') + ' ' + 'gray~~~')
// other string gray~~~
console.log(symbols('https://www.npmjs.com', 'blue', 'underline'))
// https://www.npmjs.com - add link underline~~~

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
* smiley ㋡
* heart ♥
* hamburger ☰
* circleCross ⓧ
* Arbitrary string or symbols

learn more you can check [figures](https://www.npmjs.com/package/figures)

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

learn more you can check [chalk API](https://www.npmjs.com/package/chalk)

------

### License
[MIT](https://github.com/yyhappynice/node-symbols/blob/master/LICENSE)