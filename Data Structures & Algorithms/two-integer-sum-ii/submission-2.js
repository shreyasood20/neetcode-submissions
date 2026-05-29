class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let maps={}
        for(let i=0;i<numbers.length;i++){
            maps[numbers[i]]=i
        }
        for(let num of numbers){
            const secondE = target-num;
            if(maps[secondE]){
               const res = maps[secondE]>maps[num]?[maps[num]+1,maps[secondE]+1]:[maps[secondE]+1,maps[num]+1]
                return res;
            }
        }
    }
}
