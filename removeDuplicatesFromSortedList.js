/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function (head) {
    let pointer = head;

    while (pointer) {
        while (pointer.next && pointer.val === pointer.next.val) {
            pointer.next = pointer.next.next;
        }

        pointer = pointer.next;
    }

    return head;
};

// let list1 = new ListNode(1);
// list1.next = new ListNode(1);
// list1.next.next = new ListNode(2);
// list1.next.next.next = new ListNode(3);
// list1.next.next.next.next = new ListNode(3);
// 
// console.log(deleteDuplicates(list1));

let list2 = new ListNode(1);
list2.next = new ListNode(1);
list2.next.next = new ListNode(1);

console.log(deleteDuplicates(list2));