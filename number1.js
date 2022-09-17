let res;
// string to number
res = typeof(('100'));
console.log(res);
// console.log(typeof(res))
// 100
// boolean to number
res = Number(false);
console.log(res); // 0

res = Number(' ');
console.log(res); // 0

res = Number('hello');
console.log(res); // NaN

res = Number(undefined);
console.log(res); // NaN

console.log(typeof(Infinity))