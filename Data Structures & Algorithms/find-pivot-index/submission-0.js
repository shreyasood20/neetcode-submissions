class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let n=nums.length-1
        const totalSum = nums.reduce((acc,curr)=>{
            acc+=curr;
            return acc;
        },0)
        let runningSum =0;
       for(let i=0;i<=n;i++){
            if(totalSum-runningSum-nums[i]===runningSum){
                return i;
            }
         runningSum+=nums[i];  
       }
        return -1
    }
}
