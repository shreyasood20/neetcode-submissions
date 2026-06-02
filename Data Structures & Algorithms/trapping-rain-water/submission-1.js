class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) {
            return 0;
        }
        let i = 0;
        let j = height.length - 1;
        let res = 0;
        let maxL = height[i];
        let maxR = height[j];
        while (i < j) {       
            if (maxL <= maxR) {
                i++;
                maxL = Math.max(height[i],maxL);   
                res+=maxL - height[i];              
            } else {
                j--;
                maxR = Math.max(height[j],maxR);
                res+= maxR - height[j];
            }
        }
        return res;
    }
}
