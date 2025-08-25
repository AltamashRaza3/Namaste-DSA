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

// Add new node at Head-
function addAtHead(val){
  let newNode= new Node(val);
  newNode.next = this.head;
  this.head = new Node;
  this.size ++ ;
}

// Add new element to the Head

// Add new element to the tail

// Add new element at particular index

// Deleting a element at the paticular index
