// Bubble sorting : Check adjacent element are compared and swapped to move 
// larger elements to the ends of the list

let arr= [5,4,9,15,1,0];

let n= arr.length;
function bubbleSort(arr){
  let isSwapped = false;
for(let i=0;i<n-1;i++){
  for(let j=0;j<n-1-i;j++){
    if(arr[j]>arr[j+1]){
      let temp = arr[j];
      arr[j]= arr[j+1];
      arr[j+1]= temp;

      isSwapped = true;
    }
  }
  if(!isSwapped) break;
}
return arr;
}
let result = bubbleSort(arr);
console.log(result);