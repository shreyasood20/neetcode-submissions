class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charset = new Set();
        let l=0;
        let res=0;
        for(let r=0; r<s.length; r++ ){
            while(charset.has(s[r])){
                charset.delete(s[l]);
                l++
            }
            charset.add(s[r]);
            res =Math.max(res,r-l+1)
        }
        return res;
    }
}
