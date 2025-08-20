// Merge two sorted Arrays:
let a1= [2,4,8,9];
let a2= [1,3,5,7];

var mergeSort= function(right,left){
  let result = [];
  let i=0; 
  let j=0;

  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      result.push(left[i]);
      i++
    }
    else{
      result.push(right[j]);
      j++;
    }
  }

  while(i<left.length){
    result.push(left[i]);
    i++;
  }

  while(j<right.length){
    result.push(right[j]);
    j++;
  }

  return result;
}
console.log(mergeSort(a1,a2));