// Ex-1 Find sum of the elements in the array:

// let arr= [5,3,2,0,1];
// function sum(n){
//   if(n==0) return arr[0]; // Base Case
//   return arr[n]+sum(n-1)
// }

// console.log(sum(arr.length-1))

// Ex-2  Find the sum of all odd numbers in the array
let arr = [5,3,2,0,1]; // Skips those number which are even

function sum(n){
  let isOdd = ((arr[n] %2 )!== 0);
  if( n== 0){
    return isOdd ? arr[n] : 0;
  }
  return ((isOdd ? arr[n]:0) + sum(n-1))
}
console.log(sum(arr.length-1));