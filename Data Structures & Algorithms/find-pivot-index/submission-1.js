class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const totalSum = nums.reduce((acc,curr)=>{
            acc+=curr;
            return acc;
        },0)
        let runningSum =0;
       for(let i=0;i<nums.length;i++){
            if(totalSum-runningSum-nums[i]===runningSum){
                return i;
            }
         runningSum+=nums[i];  
       }
        return -1
    }
}
