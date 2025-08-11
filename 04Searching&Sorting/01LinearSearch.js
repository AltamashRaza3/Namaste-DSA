// Traverse an array and check each element sequentially.
// To find a match if found then return index otherwise return -1

var arr= [4,9,-1,0,2];
let target =-1;

function linearSearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]==target) return i;
  }
  return -1;
}

console.log(linearSearch(arr,target))