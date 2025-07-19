// Loop inside loop 

// for(let i=0; i<3; i++){
//   for(let j=0; j<3; j++){
//     console.log("i = ", i + " j = ",j);
//   }
// }
// Above code will print 9 times ---


// Ex-2 
// for(let i=  0; i<3; i++){
//   for(let j=0; j<i; j++){
//     console.log(i,j);
//   }
// }

// Ex-3
// for(let i=0; i<5; i++){
//   for(let j=0; j<=i; j++){
//     console.log("i = ", i + " j = ",j);
//   }
// }


// Ex-4
// for(let i=0; i<3; i++){
//   for(let j=i; j>0; j--){
//     console.log("i = ", i + " j = ",j);
//   }
// }

// Ex-5

for(let i=5;i>0;i--){
  for(let j=0;j<i;j++){
    console.log(i+ " "+j);
  }
}