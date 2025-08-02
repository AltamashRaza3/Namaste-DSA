/**
 Given an integer array nums and an integer val, 
 remove all occurrences of val in nums in-place. 
 The order of the elements may be changed. 
 Then return the number of elements in nums which are not equal to val.

 Consider the number of elements in nums which are not equal to val be k, 
 to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

 */


var removeElement = function(nums, val) {
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[x]=nums[i];
            x=x+1;
        }
    }
    return x;
};
var nums= [3,1,2,2,4,5,3];
var val= 3;
console.log(removeElement(nums,val))