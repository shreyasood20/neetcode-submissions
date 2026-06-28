class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let first;
        let second;
        for (let t of tokens) {
            if (t === "+") {
                first = stack.pop();
                second = stack.pop();
                stack.push(first + second);
            } else if (t === "*") {
                first = stack.pop();
                second = stack.pop();
                stack.push(first * second);
            } else if (t === "-") {
                first = stack.pop();
                second = stack.pop();
                stack.push(second - first);
            } else if (t === "/") {
                first = stack.pop();
                second = stack.pop();
                stack.push(Math.trunc(second / first));
            } else {
                stack.push(Number(t));
            }
        }
        return stack[0];
    }
}
