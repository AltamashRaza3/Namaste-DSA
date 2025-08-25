// Design a linkedList--

//Creating a new node
function newNode(val){
  this.val= val;
  this.next= null;
 }
let newNode= newNode(5);

//creating a new linkedList
function newLinkedList(){
  this.head= null;
  this.size =0;
}

// Add new element to the Head
function addAtHead(val){
  let newNode= new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size ++ ;
}

// Add new element to the tail
  function addToTail(val){
    let newNode = new Node(val);
    // Corner-case --> if linkedlist is empty then
    if(this.head==null){
      this.head= newNode;
    }
    // reach to the last element
    else{
    let curr= this.head;
    while(curr.next != null){
      curr= curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
}
// Add new element at particular index

// Deleting a element at the paticular index
