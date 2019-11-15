/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;

    let fast = head.next;
    let slow = head;

    while (fast && slow) {
        if (fast === slow) return true;

        if (fast.next && fast.next.next) {
            fast = fast.next.next;
        } else {
            return false;
        }
        slow = slow.next;
    }

    return false;
};