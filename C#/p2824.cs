public class Solution {
    public int CountPairs(IList<int> nums, int target) {
        var res = 0;
        nums = nums.OrderBy(x => x).ToList();

        for (int i=0; i < nums.Count(); i++)
        {
            for (int j=i+1; j<nums.Count(); j++)
                if (nums[i] + nums[j] < target)
                    res++;
                else
                    break;
        }

        return res;
    }
}