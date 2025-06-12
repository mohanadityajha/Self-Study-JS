function findSwapingTwoNumber(a,b){
a = a - b ;
b = a + b ;
a = b - a ;
return (`${a} and ${b}`)


}
console.log(findSwapingTwoNumber(20,10));