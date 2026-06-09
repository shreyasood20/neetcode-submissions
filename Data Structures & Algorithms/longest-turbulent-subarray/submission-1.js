class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let prevSign='';
        let l=0
        let res=0;
        for(let r=0; r<=arr.length-1;r++){
            if(arr[r]<arr[r+1]&& (prevSign==='>' || prevSign ==="")){
                prevSign='<'
                 //console.log('less than','r,l',r,l)
            }else if(arr[r]>arr[r+1] && (prevSign==='<' || prevSign==="")){
                prevSign='>'
                 //console.log('greater than','r,l',r,l)
            }else if(arr[r]===arr[r+1]){
                 //console.log('equal','r,l',r,l)
                res= Math.max(r-l+1,res);
                l=r+1;
                prevSign=''
             }
            else{
                //console.log('else','r,l',r,l)
                res= Math.max(r-l+1,res);
                l=r;
            }
        }
        return res;
    }
}
