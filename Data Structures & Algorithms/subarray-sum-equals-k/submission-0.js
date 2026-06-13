class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = new Map();
        //runningSum[0]=nums[0];
        let res=0;
        let sum =0;
        count.set(0,1)// prefixsum,freq
        for(let num of nums){
            sum+=num
            if(count.has(sum-k)){
                res+=count.get(sum-k);
            }
            count.set(sum,(count.get(sum)||0)+1);
            
        }
        return res;
    }
}
