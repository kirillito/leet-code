public class Solution {
    public int MaximumWealth(int[][] accounts) {
        return accounts.Select(c => c.Sum(a => a)).Max();
    }
}