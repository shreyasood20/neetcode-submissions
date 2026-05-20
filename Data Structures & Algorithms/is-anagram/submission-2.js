class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const freqS = {};
        const freqT={}
        for(let i =0;i<s.length;i++){
            freqS[s[i]]= (freqS[s[i]]||0)+1
            freqT[t[i]]=(freqT[t[i]]||0)+1
        }
         if(Object.keys(freqS).length!==Object.keys(freqT).length)return false;
        for(let char of s){
            if(freqS[char] !=freqT[char]) return false
        }
        return true
        
    }
}
