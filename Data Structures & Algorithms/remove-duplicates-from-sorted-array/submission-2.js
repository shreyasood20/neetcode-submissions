class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i=0;
        for(let num of nums){
            if(i<1 || num!==nums[i-1]){
                nums[i]=num;
                i++;
            }
        }
        return i;
    }
}
