// Design a linkedList--

//Creating a new node
function newNode(val){
  this.val= val;
  this.next= null;
 }
let newNode= newNode(5);

//creating a new linkedList
function linkedList(){
  this.head= null;
  this.size =0;
}