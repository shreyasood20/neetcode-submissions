class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let temp = s.split('');
        let ans ='';
        for(let char of temp){
            if(char!==' '){
                char = char.toLowerCase()
                const isAlphanumeric=/[a-z0-9]/i.test(char);
                if(isAlphanumeric) ans+=char;
            }
        }
       
        let i=0;
        let j = ans.length-1;
        while(i<j){
            if(ans[i]!==ans[j]) return false;
            i++
            j--
        }
        return true;
        
    }
}
