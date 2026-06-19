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
       // const res =[]
       let k=0;
        console.log(count);
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<count[i];j++){
                nums[k]=i;
                k++
            }
        }
       // console.log(res);
        return nums;
    }
}
