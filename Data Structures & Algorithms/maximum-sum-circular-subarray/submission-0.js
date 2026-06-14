class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let currMin=0;
        let currMax=0;
        let maxSum=nums[0];
        let minSum=nums[0];
        let totalSum=0;
        for(let n of nums){
            totalSum+=n
            currMax+=n;
            maxSum= Math.max(maxSum,currMax);
            currMax= Math.max(currMax,0);
            currMin+=n;
            minSum= Math.min(minSum,currMin);
            currMin= Math.min(currMin,0);
        }
        if(maxSum<0){
            return maxSum
        }
        maxSum=totalSum-minSum>maxSum?totalSum-minSum:maxSum
        return maxSum;
    }
}
