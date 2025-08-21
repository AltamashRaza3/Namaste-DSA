// Merge two sorted Arrays:
let array= [2,4,8,9,1,3,5,7];

var mergeArray= function(right,left){
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

  // while(i<left.length){
  //   result.push(left[i]);
  //   i++;
  // }

  // while(j<right.length){
  //   result.push(right[j]);
  //   j++;
  // }

  // return result;

  return[...result, ...left.slice(i), ...right.slice(j)]; // Object clonning.
}

var mergeSort = function(arr){
  if(arr.length <= 1 ){
    return arr;
  }
    let mid= arr.length/2;
    let left = mergeSort(arr.slice(0,mid));
    let right= mergeSort(arr.slice(mid));
    return mergeArray(left,right)
  }

console.log(mergeSort(array));