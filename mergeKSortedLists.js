/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeKLists = function (lists) {
    if (lists.length < 1) return null;

    let bigList = new ListNode(-1);
    let pointer = bigList;

    // keep going until all lists are empty
    let empty = false;
    while (!empty) {
        empty = true;

        // find the smallest node that should be merged into main list
        let smallest = lists[0];
        let smallestIdx = 0;
        for (let i = 0; i < lists.length; i++) {
            // keep looping if a node exists
            if (lists[i]) {
                empty = false;

                // establish an initial node to compare to
                if (!smallest) {
                    smallest = lists[i];
                    smallestIdx = i;
                }
            }

            // compare nodes if they exist
            if (lists[i] && smallest) {
                if (lists[i].val < smallest.val) {
                    smallest = lists[i];
                    smallestIdx = i;
                }
            }
        }

        // assign smallest node to big list
        pointer.next = smallest;
        pointer = pointer.next;

        // move sub list to its next node if it was merged
        if (lists[smallestIdx]) {
            lists[smallestIdx] = lists[smallestIdx].next;
        }
    }

    return bigList.next;
};

let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

let list3 = new ListNode(2);
list3.next = new ListNode(6);

console.log(mergeKLists([]));