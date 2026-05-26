class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prod =[]
        for (let i=0;i<nums.length;i++){
            const newArr =[...nums];
           newArr.splice(i,1);
           const p=newArr.reduce((acc,curr)=>{
            acc=acc*curr;
            return acc;
           },1)
           prod.push(p)
        }
        return prod
    }
}
