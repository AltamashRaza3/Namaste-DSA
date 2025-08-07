// Find this number is Fibonacci Number
// Leetcode 509 Codung Problem:

var fib = function (n){
  if(n<=1) return n;
  return fib(n-1) + fib(n-2);
}
let result= fib(5)
console.log(result);