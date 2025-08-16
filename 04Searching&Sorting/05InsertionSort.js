// Insertion sort technique where each element is inserted at the correct position
// in the sorted part of the array.

let arr= [7,1,5,12,-10,0,4,3,2];

function insertionSort(arr){
  let n = arr.length;
  for(let i=1;i<n-1;i++){
    let curr = arr[i];
    let perv = i-1;
    while(arr[perv] > curr && perv >=0){
      arr[perv+1] = arr[perv];
      perv--;
    }
    arr[perv+1] = curr;
  }
  return arr;
}
let sortedArray = insertionSort(arr);
console.log(sortedArray);

// Time Complexity-
//  Two Loops  - O(n^2);
// Space Complexity- O(1);

