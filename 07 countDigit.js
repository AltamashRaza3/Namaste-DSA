// Que (1). Count Digit

// function countDigit(n){
//   let count =0;
//   while(n>0){
//     n=Math.floor(n/10);
//     count++
//   }
//   return count++;
// }

// let totalDigit= countDigit(259);
// console.log(totalDigit);

// Que(2) What if number is Zero then consider zero as a single digit

// function countDigit(n){
//   if(n==0){
//     return 1;
//   }
//   while(n>10){
//     n= Math.floor(n/10);
//     count++ ;
//   }
//   return count;
// }

// let num= 0;
// let result= countDigit(num);
// console.log(result);


// Que (3). What if my number is negative
function countDigit(n){
  let count =1;
  n= Math.abs(n);
  if(n==0){
    return 1;
  }
  while(n>10){
    n= Math.floor(n/10);
    count ++
  }
  return count;
}
console.log(countDigit(-25689));