class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value)
    this.length++;
    if(!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  } 

  pop() {
    return this.delete(this.length - 1);
  }

  _find(value, test=this._test) {
    let current = this.head;
    let i = 0 ;
    while(current) {
      if (test(value, current.value, i, current)) {
        return current
      }
      current = current.next;
      i++;
    }
    return null;
  }
  
  get(index) {
    const node = this._find(index, this._testIndex)
    if (!node) return null;
    return node.value;
  }
  
  delete(index) {
    // if deleting head
    if(index === 0) {
      const head = this.head;
      // if head is not null
      if(head) {
        // remove head, make head.next new head
        this.head = head.next;
      } else {
        this.tail = this.head = null
      }
      // decrement lenght, return head
      this.length--;
      return head.value;
    }

    // find node of previous index
    const node = this._find(index - 1, this._testIndex);
    // node to delete is, node.next of node
    const excise = node.next;ds

    // if there is no node to delete, return null
    if(!excise) return null;

    // change the pointer of prev node to deleted.next
    node.next = excise.next;

    // if the next.next node is false, node.next is the tail
    if(node.next && !node.next.next) this.tail = node.next

    // decrement length and return deleted node value
    this.length--;
    return excise.value ;
  }

  _testIndex(search, __, i) {
    return search === i;
  }

  _test(a, b) {
    return a === b
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}