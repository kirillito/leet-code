public class Solution {
    public int[] NumberGame(int[] nums) {
        nums = nums.OrderBy(x => x).ToArray();
        for (int i=0; i<nums.Length; i+=2)
        {
            // swap 2 neighboring elements
            nums[i] += nums[i+1];
            nums[i+1] = nums[i] - nums[i+1];
            nums[i] -= nums[i+1];
        }
        return nums;
    }
}