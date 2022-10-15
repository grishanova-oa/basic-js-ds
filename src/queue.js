const {
  NotImplementedError
} = require('../extensions/index.js');
// import { ListNode } from '../extensions/list-node.js';
const {
  ListNode
} = require('../extensions/list-node.js');

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
  constructor(x) {
    this.value = x;
    this.next = null;
  }
  data = {};
  getUnderlyingList() {
    return this.data;
  }

  enqueue(value) {
    if (Object.keys(this.data) != 0) {
      recursive(this.data);

      function recursive(obj) {
        if (obj.next instanceof Object) {
          recursive(obj.next);
        } else {
          obj.next = new ListNode(value);
        }
      }
    } else {
      this.data = new ListNode(value);
    }
  }

  dequeue() {
    if (this.data.next instanceof Object) {
      let num = this.data.value;
      this.data.value = this.data.next.value;
      this.data.next = this.data.next.next;
      return num;
    }
  }
}



module.exports = {
  Queue
};
