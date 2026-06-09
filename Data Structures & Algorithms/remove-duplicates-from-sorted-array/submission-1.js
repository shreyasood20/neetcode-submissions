class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let j = 0;
        let i =0;
        while (j<nums.length) {
            nums[i]=nums[j];
            while (nums[j] === nums[i]&& j<nums.length) {
               j++;
            }
            i++;
        }
        return i;
    }
}
