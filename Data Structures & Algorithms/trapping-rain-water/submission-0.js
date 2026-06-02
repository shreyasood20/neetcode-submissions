class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0;
        let j = height.length - 1;
        const res = [];
        let maxL = height[i];
        let maxR = height[j];
        while (i < j) {       
            if (i > 0) {
                const diff = maxL - height[i];
                if (diff > 0) res.push(diff);
                if (height[i] > maxL) {
                    maxL = height[i];
                }
            }

            if (j < height.length - 1){
                const diff = maxR - height[j];
                if (diff > 0) res.push(diff);
                if(height[j] > maxR){
                     maxR = height[j];
                }
            } 
            if (height[i] <= height[j]) {
                i++;
            } else {
                j--;
            }
        }
        return res.reduce((acc,curr)=>{
            acc+=curr;
            return acc;
        },0)
    }
}
