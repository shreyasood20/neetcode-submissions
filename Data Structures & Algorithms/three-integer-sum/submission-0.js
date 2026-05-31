class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedArray =[...nums]
        sortedArray.sort((a,b)=>a-b);
        const res=[];
        for(let i=0;i<nums.length-2;i++){
            if (i > 0 && sortedArray[i] === sortedArray[i-1]) continue;
            const target = -(sortedArray[i]);
            let j=i+1;
            let k = sortedArray.length-1;
            while(j<k){
                if(sortedArray[j]+sortedArray[k]>target){
                    k--
                }
                else if(sortedArray[j]+sortedArray[k]<target){
                    j++
                }else{
                    res.push([sortedArray[i],sortedArray[j],sortedArray[k]]);
                     while (j > 0 && sortedArray[j] === sortedArray[j+1]) j++;
                     while (k > 0 && sortedArray[k] === sortedArray[k-1]) k--;
                    j++
                    k--
                }
            }
        }
        return res;
    }
}
