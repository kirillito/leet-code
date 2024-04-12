public class Solution {
    public int[] GetConcatenation(int[] nums) {
        var len = nums.Length;
        var res = nums.ToList();
        res.AddRange(nums.ToList());
        return res.ToArray();
    }
}