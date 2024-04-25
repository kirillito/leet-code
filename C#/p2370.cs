public class Solution {
    public int LongestIdealString(string s, int k) {
        int n = s.Length;
        int max = 0;
        int[] dp = new int[26];

        for (int i = 0; i < n; i++) 
        {
            int current = s[i] - 'a';
            int left = Math.Max(0, current-k);
            int right = Math.Min(25, current+k);

            int longest = 0;
            for (int j = left; j <= right; j++)
            {
                longest = Math.Max(longest, dp[j]);
            }

            dp[current] = Math.Max(dp[current], longest+1);
            max = Math.Max(max, dp[current]);
        }

        return max;
    }
}