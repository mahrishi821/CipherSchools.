

//syantax and declaration
var score=10;//ES5-Ecmascript 5
console.log(score);
let result="50"; // ES6-Ecmascript 2015
console.log(result);
const PI=3.14;
console.log(PI); 

//Datatypes
// 1.Number
// 2.strings
// 3.boolean
// 4.null
// 5.undefined
// 6.objects
// 7.symbols (ES6)
// here follow BEDMAS RULE (bracket exponent division multiplication addition substraction)
let finalScore= score+result;// here concationation is done
console.log(finalScore);
let penalty=score-result;//here numerical numer is used
// to know the type of data we will use typeof()
console.log(penalty);
let totalgame=10;
let avgscore=finalScore/totalgame;
console.log(avgscore);
console.log(typeof(avgscore));