// Find second Largest number is an array

// let arr= [4,9,0,2,8,7,1];
// let arr= [10,2];
// let arr= [10];
let arr=[10,20,8,9,3,5,20];
// let arr =[-2,-10,-5,-34];

// What if duplicates--- remove duplicates

function secondLargestNumber(arr){

  if(arr.length<2){
    return null;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for(let i= 0; i<arr.length; i++){

    if(arr[i]> firstLargest){
      secondLargest= firstLargest;
      firstLargest = arr[i];
    }
    else if(arr[i]>secondLargest && arr[i]!==firstLargest){
      secondLargest=arr[i]
    }
  }
  return secondLargest;
}

let result = secondLargestNumber(arr);
console.log(result);
