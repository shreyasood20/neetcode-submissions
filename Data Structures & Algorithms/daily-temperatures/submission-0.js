class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let output = Array(temperatures.length).fill(0);
        let i = 0;
        while (i < temperatures.length) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                
                const prevIndex = stack.pop();
                output[prevIndex] = i - prevIndex;
            }
            stack.push(i);
            i++;
        }
        return output
    }
    
}
