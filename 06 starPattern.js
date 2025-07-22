
// Que (1). Print 4 stars in column
/* 
    * * * *
    * * * *
    * * * *
    * * * *
*/

// let n=4;
// for(let  i= 0; i<n; i++){
//   let row= "";
//   for(let j=0; j<n; j++){
//     row =row + " * ";
//   }
//   console.log( row );
// }

// Que (2). 
/* 
    * 
    * *
    * * *
    * * * *
*/
// let n=4;
// for (let i=0; i<n;i++){
//   let row = "";
//   for (let j=0; j<i+1; j++){
//     row = row+ " * ";
//   }
//   console.log(row)
// }

/* Que (3)
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
// let n= 5;
// for (let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<=i; j++){
//     row = row +" "+(j+1);
//   }
//   console.log(row);
// }


// Que (4) Print this pattern
/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
// let n=5;
// for (let i=0; i<n; i++){
//   let row =" ";
//   for(let j=0; j<=i; j++){
//     row = row + (i+1)
//   }
//   console.log(row);
// }

// Que (5) Print this pattern
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1 
*/
// let n=5;
// for (let i=0;i<n;i++){
//   let row = " ";
//   for(let j=0; j< n-1;j++){
//     row = row+(j+1)
//   }
//   console.log(row)
// }


// Que (6) 
// * * * * *
// * * * * 
// * * * 
// * * 
// *

// let n=5;
// for (let i=0; i<n;i++){
//   let row ="";
//   for(let j=0;j<(n-i);j++){
//     row= row+ (" * ");
//   }
//   console.log(row);
// }

// Que (7). print this pattern: 
/**
        * 
      * *
    * * * 
  * * * *
* * * * *

*/
let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
    let row = '';
    // Add spaces
    for (let j = 1; j <= n - i; j++) {
        row += '  '; // Two spaces for better alignment
    }
    // Add stars
    for (let k = 1; k <= i; k++) {
        row += '* ';
    }
    console.log(row);
}

