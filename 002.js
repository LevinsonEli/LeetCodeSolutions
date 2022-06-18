/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let curr = result;
  let sum = 0;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    } else l1 = null;
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    } else l2 = null;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    sum = sum > 9;
  }

  if (sum) {
    curr.next = new ListNode(1);
  }

  return result.next;
};
