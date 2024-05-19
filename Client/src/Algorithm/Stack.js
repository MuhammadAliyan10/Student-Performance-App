export class Stack {
  constructor(quantity) {
    this.quantity = quantity;
    this.stackArray = new Array(this.quantity).fill(0);
    this.top = -1;
  }

  push(value) {
    if (this.top < this.quantity - 1) {
      this.top++;
      this.stackArray[this.top] = value;
    } else {
      console.log("No space in the stack.");
    }
  }
  showArray() {
    console.log(this.stackArray);
  }
  showIndex() {
    console.log(this.top);
  }
  pop() {
    if (this.top !== -1) {
      const poppedElement = this.stackArray[this.top];
      this.stackArray[this.top] = 0;
      this.top--;
      return poppedElement;
    } else {
      console.log("Stack is empty.");
      return null;
    }
  }
}
