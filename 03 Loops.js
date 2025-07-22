//Que (1) Write a function that searches for an element in an array
// and returns the index, if the element is not present then 
// just return -1

// let arr = [4,2,0,10,8,30];

// function searchElement(arr,x){
//   for(let i=0;i<arr.length; i++){  
//     if(arr[i]==x){
//       return i;
//     }
//   }
//   return -1;
// }
// let result=searchElement(arr,10);
// console.log("Element 10 found on index ",result);




// Que(2). Write a function that returns the number of 
//          negative number in an array.

// let arr=[2,-3,17,0,1,-10,-4,8];

// function countNegativeNumbers(arr){
//   count =0;
//   for(let i= 0; i<arr.length; i++){
//     if(arr[i] < 0){
//       count=count+1 ;
//     }
//   }
//   return count;
// }
// let totalNumbers = countNegativeNumbers(arr);
// console.log(totalNumbers);


/// Que(3). Write a function that returns largest number in an array

// let arr= [5,0,10,8,17,1];

// function largestNumber(){
//   let count = arr[0];
//   for(let i=0; i<arr.length; i++){
//     if(count <arr[i]){
//       count = arr[i];
//     }
//   }
//   return count;
// }
// let result= largestNumber(arr);
// console.log("Largest Number in this array is ", result);

// -------- HomeWork---------

// Que(4). Write a function that returns smallest number in an array

let arr= [5,90,10,8,17,1];

function smallestNumber(){
  let smallest = arr[0];
  for(let i=0; i<arr.length; i++){
    if(smallest >arr[i]){
      smallest = arr[i];
    }
  }
  return smallest;
}

let result= smallestNumber(arr);
console.log("Smallest Number in this array is ", result);
