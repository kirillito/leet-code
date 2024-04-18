public class Solution {
    public int MaxWidthOfVerticalArea(int[][] points) {
        int max = 0;
        // select all x coordinates and sort them
        List<int> xp = points.Select(p => p[0]).OrderBy(x => x).ToList();

        // the answer is the max difference between any two neighboring elements in the sorted list
        for (int i=1; i<xp.Count(); i++)
        {
            var diff = Math.Abs(xp[i] - xp[i-1]);
            max = diff > max ? diff : max;
        }
        return max;
    }
}