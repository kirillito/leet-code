public class Solution {
    public int Tribonacci(int n) {
        int[] dp = new int[n+2];
        dp[0] = 0;
        if (n < 1)
            return dp[n];
        dp[1] = 1;
        dp[2] = 1;

        for (int i=3; i<=n; i++)
        {
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
        }
        return dp[n];
    }
}