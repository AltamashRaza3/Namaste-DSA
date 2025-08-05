// Print 1 to 10 with help of recursion
// Example 1---

// var printNummber = function(num){
//   if(num==0) return;
//   console.log(num);
//   num = num-1;
//   printNummber(num);
// }
// let a=10;
// printNummber(a);

// Example 2 Print n to 1 using Recursion
// function print(n){
//   if(n<1) return
//   console.log(n);
//   print(--n);
// }
// print(5);

// Example 3 Print 1 to n using Recursion
function printNumber(x){
  if(x>n) return;
  console.log(x);
  printNumber(++x)
}
let n=10;
let x=1;
printNumber(x);