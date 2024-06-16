public class Solution {
    private int GetNumberOfOnes(int x)
    {
        int res = 0;
        while (x > 0)
        {
            if (x % 2 > 0)
                res++;
            x /= 2;
        }
        return res;
    }

    public int SumIndicesWithKSetBits(IList<int> nums, int k) {
        return nums.Where((x,index) => GetNumberOfOnes(index) == k).Sum(x => x);
    }
}