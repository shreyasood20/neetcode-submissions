class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count = [0,0];
        let res = students.length;
        for (let s of students) {
            count[s]++
        }
        for (let s of sandwiches) {
            if (count[s] > 0) {
                count[s]--;
                res--;
            }else{
                break;
            }
            
        }
        return res;
    }
}
