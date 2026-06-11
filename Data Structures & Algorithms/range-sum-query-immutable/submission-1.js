class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const n = nums.length;
        this.prefix = Array(n);
        this.prefix[0] = nums[0];
        for (let i = 1; i < n; i++) {
            this.prefix[i] = this.prefix[i - 1] + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const sum = this.prefix[right] - (left===0?0:this.prefix[left - 1]);
        return sum;
    }
}
