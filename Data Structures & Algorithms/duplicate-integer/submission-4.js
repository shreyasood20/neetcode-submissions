class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq={}
        for(let n of nums){
            freq[n] = freq[n]+1 || 1
        }
        //console.log(freq)
        for (let n in freq){
            if(freq[n]>1){
                return true
            }
        }
        return false
    }
}
