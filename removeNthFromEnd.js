/*
    one pass solution that stores data in array for easier reference

    takes much more space
*/

var removeNthFromEnd = function (head, n) {
    let nodesArr = [];

    let current = head;
    while (current !== null) {
        nodesArr.push(current);
        current = current.next;
    }

    let length = nodesArr.length;
    if (n > length) return -1;
    if (length === 1) return null;

    if (nodesArr.length <= 1) {
        return [];
    }

    let targetNode = nodesArr[length - n];
    if (nodesArr[length - n - 1] && targetNode.next === null) {
        nodesArr[length - n - 1].next = null;
        return nodesArr[0];
    } else if (!nodesArr[length - n - 1] && targetNode.next !== null) {
        targetNode.next = null;
        return nodesArr[1];
    } else {
        let prevNode = nodesArr[length - n - 1];
        let nextNode = targetNode.next;
        prevNode.next = nextNode;
        return nodesArr[0];
    }
};
