class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res= Array(n);
        const prefix = Array(n);
        const suffix = Array(n);
        
        prefix[0]=1;
        suffix[n-1]=1;

        for(let i=1;i<nums.length;i++){
            prefix[i] = nums[i-1]*prefix[i-1];
        }
        console.log(prefix);
        for(let i=n-2;i>=0;i--){
            suffix[i]= nums[i+1]*suffix[i+1];
        }
        console.log(suffix);
        for(let i=0;i<nums.length;i++){
            res[i] = prefix[i]*suffix[i];
        }
        return res;
    }
}
