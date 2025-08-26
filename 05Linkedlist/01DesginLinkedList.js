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
// Get an element at index--
function getElement(index){
  if(index < 0 || index >= size) return -1;
  let curr = this.head;
  for(let i=0;i<index;i++){
    curr = curr.next;
  }
  return curr.val;
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
function addAtIndex(index,val){
  let newNode = new Node(val);
  if(index ==0){
    this.addAtHead(val);
    return;
  }
  else if(index == null){
    this.addToTail(val);
    return;
  }
  else{
  for(let i=0; i<index-1;i++){
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
}
this.size ++;
}

// Deleting a element in linkedList

function deleteAtIndex(index,val){
 let curr = curr.head
  for(let i=0;i<index;i++){
    curr = curr.next;
  }
  return curr.val;
}