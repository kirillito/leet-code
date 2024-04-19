public class Solution {
    public int[] LeftRightDifference(int[] nums) {
        int[] res = new int[nums.Length];
        int left = 0;
        int right = nums.Sum();

        // result
        for (int i=0; i<nums.Length; i++)
        {
            right -= nums[i];
            res[i] = Math.Abs(left - right);
            left += nums[i];
        }

        return res;
    }
}