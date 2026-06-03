class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i=0;
        let j =0;
        let max=0;
        while(j<prices.length){
            if(prices[i]>prices[j]){
            i=j
           }
            const diff = prices[j]-prices[i];
            if(diff>0){
                max = Math.max(diff,max);
           }
           
            j++;
        }
        return max;
    }
}
