public class Solution {
    public int[] BuildArray(int[] nums) {
        for (int i=0; i<nums.Length; i++)
        {
            if (nums[nums[i]] < 1000)
                nums[i] += nums[nums[i]] * 1000;
            else
                nums[i] += nums[nums[i]] % 1000 * 1000;
        }
        for (int i=0; i<nums.Length; i++)
        {
            nums[i] /= 1000;
        }

        return nums;
    }
}