// Merge two sorted Arrays:
let a1= [2,4,8,9];
let m =a1.length;
let a2= [1,3,5,7];
let n=a2.length;

function mergeArray(a1,m,a2,n){
let a1copy= a1.slice(0,m); // [2,4,8,9]
  let p1= 0;
  let p2= 0;

  for(let i=0; i<m+n; i++){
    if(p2>=n || (p1<m && a1copy[p1] < a2[p2])){
      a1[i] = a1copy[p1];
      p1++;
    }
    else{
      a1[i]= a2[p2];
      p2++
    }
  }
  return a1;
}
console.log(mergeArray(a1,m,a2,n));