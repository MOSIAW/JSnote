var date = new Date('2021-5-1 8:8:8');
console.log(date);

// 获得距离1970年1月1日的毫秒数(时间戳)
// 方法一
var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());
// 二
var date1 = +new Date();
console.log(date1);
// 三
console.log(Date.now());
