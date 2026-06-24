class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        const obj = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let b of s) {
            if (b === obj[")"] || b === obj["}"] || b === obj["]"]) {
                arr.push(b);
            } else {
                let last=arr.pop();
                if(last!==obj[b]){
                    return false;
                }
            }
        }
        return arr.length===0?true:false
    }
}
