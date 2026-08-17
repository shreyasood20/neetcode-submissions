class LinkNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyLinkedList {
    constructor() {
        this.head = new LinkNode(0);
        this.tail = new LinkNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        while (curr && index > 0) {
            curr = curr.next;
            index--;        
        }
        if (curr && curr !== this.tail && index === 0) {
            return curr.val;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new LinkNode(val);
        const next = this.head.next;
        const prev = this.head;
        prev.next = newNode;
        next.prev = newNode;
        newNode.next = next;
        newNode.prev = prev;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new LinkNode(val);
        const prev = this.tail.prev;
        const next = this.tail;
        prev.next = newNode;
        next.prev = newNode;
        newNode.next = next;
        newNode.prev = prev;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) return;
        if (index < 0) index = 0;
        let curr = this.head.next;
        let tempIndex = index;
        while(curr && tempIndex > 0){
            curr = curr.next;
            tempIndex--;
        }
        if(curr && tempIndex === 0){
           const newNode = new LinkNode(val);
           const prev = curr.prev;
           const next = curr;
           prev.next = newNode;
           next.prev = newNode;
           newNode.prev = prev;
           newNode.next = next;
           this.size++;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        let curr = this.head.next;
        let tempIndex = index;
        while (curr && tempIndex > 0) {
            curr = curr.next;
            tempIndex--;
        }
        if(curr && tempIndex === 0 && curr !== this.tail){
            const prev = curr.prev;
            const next = curr.next;
            prev.next = next;
            next.prev = prev;
            this.size--;
        }
    }
}
