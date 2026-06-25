class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record=[];
        for(let o=0;o<operations.length;o++){
           
            if(operations[o]=="+"){
               record.push(record[record.length-1]+record[record.length-2]);
            }else if(operations[o]==="D"){
                record.push(record[record.length-1]*2)
            }else if(operations[o]==="C"){
                record.pop();
            }else{
                record.push(+(operations[o]));
            }
        }
        
        return record.reduce((acc,curr)=>{
            acc+=curr
            return acc;
        },0)
    }
}
