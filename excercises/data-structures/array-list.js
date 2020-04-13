class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {}
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    return this.delete(this.length - 1)
  } 
  get(index) {
    return this.data[index];
  } 
  // delete is expensive
  delete(index) {
    const ans = this.data[index]
    this._collapseTo(index);
    return ans
  }
  _collapseTo(index){
    for(let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--; 
  }
}


const test = new ArrayList
test.push(1)
test.push(2)
test.push(3)
console.log(test)
test.pop()
console.log(test)
console.log(test.get(0))
test.push(8)
test.push(4)
test.delete(3);
console.log(test)