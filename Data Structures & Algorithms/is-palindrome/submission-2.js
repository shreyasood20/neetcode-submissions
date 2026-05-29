class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //let temp = s.split('');
        // let ans ='';
        // for(let char of temp){
        //     char = char.toLowerCase();
        //         if(this.isAlphanumeric(char)) ans+=char;        
        // }

        let i=0;
        let j = s.length-1;

        while(i<j){
            while(i<j && !this.isAlphanumeric(s[i])){
                i++
            }
            while(j>i && !this.isAlphanumeric(s[j])){
                j--
            }
                if(s[i].toLowerCase()!==s[j].toLowerCase()) return false;
            i++
            j--
        }
        return true;
        
    }

    isAlphanumeric(char){
        char= char.toLowerCase();
        return /[a-z0-9]/i.test(char);

    }
}
