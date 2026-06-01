class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let maxArea=0;
        while (i < j) {
            const width = j - i;
            const length = Math.min(heights[i], heights[j]);
            const area = width * length;
            maxArea = Math.max(maxArea, area);

            if (heights[i] > heights[j]) {
                j--;
            } else {
                i++;
            }
        }
        return maxArea;
    }
}
