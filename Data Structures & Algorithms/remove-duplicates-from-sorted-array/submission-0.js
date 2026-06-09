class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0;
        let j = 1;
        while (j < nums.length) {
            if (nums[j] === nums[i]) {
                nums.splice(j, 1);
            } else {
                j++;
                i++;
            }
        }
        return nums.length;
    }
}
