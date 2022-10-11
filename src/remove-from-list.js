const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let result = new ListNode();
  let last = l;
  while (true) {
    if (last.value !== k) {
      if (!result.value) {
        result.value = last.value;
      }
      else {
        let lastResult = result;
        while (lastResult.next) {
          lastResult = lastResult.next;
        }
        lastResult.next = new ListNode(last.value);
      }
    }
    last = last.next;
    if (!last) break;
  }
  return result;
}

module.exports = {
  removeKFromList
};