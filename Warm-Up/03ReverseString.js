// Reverse strings. (inplace)
// Do not return anything, modify s-inplace instead:

let s=["a","k","s","h","a","y"];
var reverseString= function(s){
  let length = s.length;
  let halfLength= Math.floor(length/2);

  for(let i=0;i<halfLength;i++){
    let temp= s[i];
    s[i]= s[length-1-i];
    s[length-1-i]= temp;
  }
  return s;
};
console.log(reverseString(s));