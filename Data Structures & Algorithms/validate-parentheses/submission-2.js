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
            if(obj[b]){
                if(arr.length>0 && arr[arr.length-1]===obj[b]){
                    arr.pop();
                }else{
                    return false;
                }
            }else{
                arr.push(b);
            }
            //if (b === obj[")"] || b === obj["}"] || b === obj["]"]) {
            //     arr.push(b);
            // } else {
            //     let last=arr.pop();
            //     if(last!==obj[b]){
            //         return false;
            //     }
            // }
        }
        return arr.length===0;
        //return arr.length===0?true:false
    }
}
