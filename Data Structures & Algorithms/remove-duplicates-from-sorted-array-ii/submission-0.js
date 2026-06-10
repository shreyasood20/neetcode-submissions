class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
      let l=0;
      for(let num of nums){
        if(l<2 || num!==nums[l-2]){
            nums[l]=num;
            l++
        }
      }
      return l;
      
    }

}
