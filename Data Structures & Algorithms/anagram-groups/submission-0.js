class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map ={};
        for(let s of strs){
           const SortedS= s.split('').sort().join('');
           if(!map[SortedS]){
            map[SortedS] = [s]
           }else{
            map[SortedS].push(s);
           }
        }
        return Object.values(map)
    }
}
