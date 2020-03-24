class Stack {
  constructor() {
    this.val = [];
  }

  pop() {
    return this.val.pop();
  }

  push(val) {
    this.val.push(val)
  }

  isEmpty() {
    return this.val.length <= 0;
  }
}
