class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map ={};
        if(nums.length===0) return 0;
        for(let i=0;i<nums.length;i++){
            map[nums[i]]=true;
        }
        let maxlength=0;
        let length=0;
        let i = 0;
        while(i<nums.length){
            if(!map[nums[i]-1]){// check for left side number
                let currNumber =nums[i];
                length=1;
                while(map[currNumber+1]){ // check for right side sequence               
                    currNumber++;
                    length++;          
                }
            }
            maxlength = Math.max(maxlength,length);
            i++;
        }
        return maxlength;
    }
}
