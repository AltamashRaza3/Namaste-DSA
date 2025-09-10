// How to find this linkedlist have cycle or not   LeetCode- 141

function isCycle(head){
  let seenNodes = head;
  let curr = head;
  while(curr !=null){
    if(seenNodes.has(curr)){
      return true;
    } 
    seenNodes.add(curr);
    curr =curr.next;
  }
  return false;
}