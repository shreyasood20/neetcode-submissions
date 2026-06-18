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
    quickSort(pairs) {
        this.quickSortPairs(pairs);
        return pairs
    }
    quickSortPairs(arr,low=0,high=arr.length-1){
        if(low<high){
            const pivot = this.partition(arr,low,high)
            this.quickSortPairs(arr,low,pivot-1);
            this.quickSortPairs(arr,pivot+1,high);
        }
        return arr;
    }
    partition(arr,low,high){
        const pivot = arr[high];
        let i=low;
        for(let j=low;j<high;j++){
            if(arr[j].key<pivot.key){
                [arr[i],arr[j]]=[arr[j],arr[i]]
                i++
            }
        }
       [ arr[i],arr[high]]=[arr[high],arr[i]];
       return i;
    }

}
