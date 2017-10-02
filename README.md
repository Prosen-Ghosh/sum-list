# sum-list
Add up all of the numbers in an array of numbers. Also works when non-numbers are present as well.

![npm](https://img.shields.io/npm/v/sum-list.svg) ![license](https://img.shields.io/npm/l/sum-list.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/sum-list.svg) 



![nodei.co](https://nodei.co/npm/sum-list.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/sum-list.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/sum-list.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/sum-list.svg)

## Features


## `npm` Install

`npm install --save sum-list`

## Script Tag

#### For Development
```js
<script src=""></script>
```
### For Production
```js
<script src=""></script>
```

## Usage

```js

var sum = require('sum-list')

sum([1,2,3,"as",{},[],9]);
//=> 15
sum([1,2,3,"as",{},[]]);
//=> 6

//TypeError

sum(); // Without parameter function call will throw an type error
//=> TypeError: sum() expects an array parameter

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT** : http://opensource.org/licenses/MIT
