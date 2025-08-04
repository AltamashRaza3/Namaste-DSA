// Print 1 to 10 with help of recursion
// Example 1---

var printNummber = function(num){
  if(num==0) return;
  console.log(num);
  num = num-1;
  printNummber(num);
}
let a=10;
printNummber(a);