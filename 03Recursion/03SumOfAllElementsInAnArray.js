// Find sum of the elements in the array:

let arr= [5,3,2,0,1];

function sum(n){
  if(n==0) return arr[0]; // Base Case
  return arr[n]+sum(n-1)
}

console.log(sum(arr.length-1))