class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l=0;
        let count=0;
        let total=0;
        for(let r=0;r<arr.length;r++){
             total+=arr[r];
            if(r-l+1===k){
                if(total>=threshold*k){
                    count++;
                }
                total-=arr[l];
                l++
            }           
        }
        return count;
    }
}
