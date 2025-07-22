
// For Loops and While loop

// For Loop

// (1) Print hello world for 20 times...
// for(let i=1; i<=20; i++){
//   console.log("Hello World" + i);
// }


// (2). Print 1 to 10 
// for(let i=1; i<=10; i++){
//   console.log(i);
// }

// (3). What will be the output of this expression
// for(let i=2; i<9; i=i+2){
//   console.log(i);
// }

//(4) What will be the output of this expression (Reverse number)

// for(let i=5; i>0; i=i-1){
//   console.log(i)
// }

//(5) What will be the output of this expression

// for(let i=5; i<6; i++){
//   console.log(i)
// }

// (6). Add a function inside a loop
// function greet(i){
//   console.log("Namaste DSA" + i);
// }
// for(let i=0;i<10;i++){
//   greet(i);
// }

// (7) Arrays and loops together
let arr= [10,5,2,7,13,8,3];
let length = arr.length; 
// console.log(length); //6

//(8). Print the elements of the array:

// for(let i=0; i<=arr.length; i++){
//   console.log(arr[i]);
// }

//(9) Print only even numbers in from the array

// for(let i=0; i<=length; i++){
//   if(arr[i]%2==0){
//    console.log(arr[i]);
//    }
// }

//(10) Print only odd Numbers:
// for(let i=0; i<=length;i++){
//   if(arr[i]%2==1){
//     console.log(arr[i]);
//   }
// }


// While Loop->

//(1) Print 1 to 5
let i=1;
while(i<=5){
  console.log(i);
  i++;
}
