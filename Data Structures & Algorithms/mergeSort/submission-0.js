/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if(pairs.length<2){
            return pairs
        }
        const mid = Math.floor(pairs.length/2);
        const leftArray = pairs.slice(0,mid);
        const rightArray = pairs.slice(mid);

        return this.merge(this.mergeSort(leftArray),this.mergeSort(rightArray));
    }
    merge(leftArray,rightArray){
        const sA=[];
        let i=0;
        let j=0;
        while(i<leftArray.length && j<rightArray.length){
            if(leftArray[i].key<=rightArray[j].key){
                sA.push(leftArray[i])
                i++
            }else{
                sA.push(rightArray[j]);
                j++
            }
        }
        while(i<leftArray.length){
            sA.push(leftArray[i])
            i++
        }
        while(j<rightArray.length){
            sA.push(rightArray[j])
            j++
        }
        return sA;
    }
}
