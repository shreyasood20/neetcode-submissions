class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = {};
        for(let char of s){
            freq[char]= (freq[char]||0)+1
        }
        for (let char of t){
            if(freq[char]){
                console.log(char,freq[char])
               freq[char]= freq[char]-1
            }else{
                return false
            }
        }
        return Object.values(freq).every(value=> value==0);
    }
}
