"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// 1 ~ 100000 사이 3또는 5의 배수의 갯수를 모두 구하시오.
// Observable.range(1, 100000) 사용
// 1. filter
rxjs_1.Observable.range(1, 100000).filter(function (data) { return data % 3 === 0 || data % 5 === 0; }).count()
    .subscribe(function (data) { return console.log(data); });
