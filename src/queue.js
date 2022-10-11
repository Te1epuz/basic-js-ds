const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (!this.value) {
      console.log(1111111)
      this.value = value;
      return this.value;
    }
    let last = this;
    while (last.next) {
      last = last.next
    }
    last.next = new ListNode (value);
    return this.value;
  }

  dequeue() {
    let value = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return value;
  }
}

module.exports = {
  Queue
};
