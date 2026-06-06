class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l=0;
        let ml= Infinity;
        let total=0;
        for(let r=0;r<nums.length;r++){
            total+=nums[r];
            while(total>=target){
                total-=nums[l];
                ml = Math.min(r-l+1,ml);
                l++;            
            }
        }
        return ml!==Infinity?ml:0;
    }
}
