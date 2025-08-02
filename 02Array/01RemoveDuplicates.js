// Non-decreasing order: There will be duplicates:sorted elements
// e.g- [0011122223344] => [01234]
// in places ==> make changes in existing array do not create new array:
 

var removeDuplicate=function(nums) {
  let x=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]>nums[x]){
      x= x+1;
      nums[x] =nums[i]
    }
  }
  return x+1;
};

let num=[0,0,1,1,2,2,2,3,3,4];
console.log(removeDuplicate(num))