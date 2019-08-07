var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(0);
    let pointer = head;

    while ((l1 !== null) && (l2 !== null)) {
        if (l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        } else {
            pointer.next = l2;
            l2 = l2.next;
        }

        pointer = pointer.next;

    }

    if (l1 !== null) {
        pointer.next = l1;
    } else {
        pointer.next = l2;
    }

    return head.next;
};
