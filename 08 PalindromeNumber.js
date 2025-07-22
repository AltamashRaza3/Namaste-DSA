// Que(1). Check this number is palindrome or not:

// let  n=2552;
// let  rev=0;

// function isPalindrome(n){
//   if(n<0) {
//     return false;
//   }
//   let nCopy=n;

// while(n>0){
//   let rem = n % 10;
//   rev = (10*rev)+rem;
//   n=Math.floor(n/10);
// }
// if(rev === nCopy){
//   return true;
// }
// else{
//   return false;
// }
// }
// console.log(isPalindrome(n));

function isPalindrome(n){

  if(n<0){        // For checking negative numbers:
    return false;
  }

  let nCopy= n;   // Storing the orginal value of X
  let rev= 0;
  while(n>0){
    let rem = n % 10;
    rev = (10*rev)+rem;
    n =Math.floor(n/10);
  }

  return nCopy === rev;
}
console.log(isPalindrome(2552));