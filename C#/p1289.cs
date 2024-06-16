public class Solution {
    public int MinFallingPathSum(int[][] grid) {
        int n = grid.Length;
        if (n == 1)
            return grid[0][0];
        
        int[][] dp = new int[n][];
        dp[0] = grid[0];

        for (int i=1; i<n; i++)
        {
            int[] newDp = new int[n];
            for (int j=0; j<n; j++)
            {
                newDp[j] = dp[i-1].Where((x,xi)=>xi!=j).Min()+grid[i][j];
            }
            dp[i]= newDp;
        }
        return dp.Last().Min();
    }
}