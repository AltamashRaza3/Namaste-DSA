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
  this.head = new Node;
  this.size ++ ;
}

// Add new element to the tail
  function addToTail(val){
    // reach to the last element
    let curr= this.head;
    while(curr.next != null){
      curr= curr.next;
    }
    let newNode = new Node(val);
    curr.next = newNode;
  }
// Add new element at particular index

// Deleting a element at the paticular index
