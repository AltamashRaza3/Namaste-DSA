
// Que (1) Write as a function that takes an integer as input and returns the integer with its digits reversed.
// Example: Given x = 123, return 321. If the integer is negative,

// function revInteger(n){
//   let rev=0;
//   let nCopy=n;
//   n= Math.abs(n); // For converting negative to postive number
//   while(n>0){
//     let rem = n%10;
//     rev= (10*rev)+rem;
//     n=Math.floor(n/10);
//   }
//   return (nCopy<0) ? -rev:rev;
// }
// console.log(revInteger(2552));

// LeetCode Pattern:
 
var reverse=function(x){
 let xCopy= x; // Storing orginal number of x
  x=Math.abs(x); // Converting negative number to postive number
  let rev=0;  
  while(x>0){
    let rem = x%10; // For taking last digit of input integer
    rev = (10*rev)+rem;
    x=Math.floor(x/10); // For removing last digit of input integer
  }
  let limit = Math.pow(2,31);
  if(rev<-limit || rev>limit) return 0;

  return(xCopy<0)? -rev: rev;
}
console.log(reverse(-2552));