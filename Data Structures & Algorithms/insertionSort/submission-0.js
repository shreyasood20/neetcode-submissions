
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        let res = [];
        for(let i=0;i<pairs.length;i++){
            let j=i-1

            while(j>=0 && pairs[j+1].key<pairs[j].key){
                [pairs[j],pairs[j+1]]=[pairs[j+1],pairs[j]]
                j--;
            }
            res.push([...pairs]);
    }
    return res;
    }}

