class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {//[1,0,1,2]
        const count =Array(3).fill(0);
        for(let n of nums){
            count[n]++;
        }

       let k=0;
        for(let i=0;i<nums.length;i++){
           while(count[i]-->0){
                nums[k]=i;
                k++
            }
        }
      
        return nums;
    }
}
