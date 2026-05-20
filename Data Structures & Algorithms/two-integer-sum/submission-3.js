class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map ={};
        for(let i=0;i<nums.length;i++){
            map[nums[i]]=i;
        }
        for(let i=0;i<nums.length;i++){
            const toFind=target-nums[i];
            if(map[toFind]!==undefined && map[toFind]!==i){
                return[i,map[toFind]];
            }

        }
    }
        
        
}
