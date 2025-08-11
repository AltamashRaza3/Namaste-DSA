// Find element in a sorted Array and dividing the search space in half.

var nums= [-1,0,3,5,9,12];
var target =9;


function search(nums,target){
  let  left=0;
  let right= nums.length-1;
  while(right>=left){
    let middle = Math.floor((left+right)/2);

    if(target=== nums[middle]){
      return middle;
    }
    else if(target>nums[middle]){
      left= middle+1;
    }
    else{
      right = middle-1
    }
  }
  return -1;
}

console.log(search(nums,target));