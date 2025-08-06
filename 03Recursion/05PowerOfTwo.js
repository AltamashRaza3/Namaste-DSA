// Check the number is Power of two:

function Poweroftwo(n){
  if(n==1) return true;
  else if(n%2!==0 || n<1) return false;
  return Poweroftwo(n/2);
}
console.log(Poweroftwo(6));