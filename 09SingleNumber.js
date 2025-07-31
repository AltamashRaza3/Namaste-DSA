/**
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.

You must implement a solution with a linear runtime complexity
and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1
 */

var nums= [4,1,2,1,2];

// 1st Approch---
// var findSingleNumber= function(nums){
//   let hash={};
//   for(let i=0;i<nums.length;i++){
//     if(!hash[nums[i]]){
//       hash[nums[i]]=1;
//     }
//     else{
//       hash[nums[i]] ++ ;
//     }
//   }
//   for(let i=0;i<nums.length;i++){
//     if(hash[nums[i]] == 1)
//     return nums[i];
//   }
// }
// console.log(findSingleNumber(nums));


// 2nd Approach

var findSingleNumber= function(nums){
  let XOR = 0;
  for(let i=0;i<nums.length;i++){
    XOR= XOR ^ nums[i];
  }
  return XOR;
}
console.log(findSingleNumber(nums));