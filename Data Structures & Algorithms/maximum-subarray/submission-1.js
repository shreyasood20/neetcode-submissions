class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum=0;
        let maxSum=nums[0];
        if(nums.length===1){
            return maxSum;
        }

        for(let n of nums){
            currSum+=n;
            maxSum=Math.max(maxSum,currSum);
            currSum=Math.max(currSum,0);
            
        }
        return maxSum;
    }
}
