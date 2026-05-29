class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let temp = s.split('');
        let ans ='';
        for(let char of temp){
            char = char.toLowerCase();
                if(this.isAlphanumeric(char)) ans+=char;        
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

    isAlphanumeric(char){
        return /[a-z0-9]/i.test(char);

    }
}
