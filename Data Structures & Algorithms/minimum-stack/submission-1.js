class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const currentMin= this.minStack.length===0?val:(Math.min(val,this.minStack[this.minStack.length - 1]))
        this.minStack.push(currentMin);
        // if (this.minStack.length === 0) {
        //     this.minStack.push(val);
        // } else {
        //     if (val <= this.minStack[this.minStack.length - 1]) {
        //         this.minStack.push(val);
        //     }
        // }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
        //if (val === this.minStack[this.minStack.length - 1]) this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
