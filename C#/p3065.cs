public class Solution {
    public int MinOperations(int[] nums, int k) {
        return nums.Count(x => x < k);
    }
}