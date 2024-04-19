public class Solution {
    public int NumIslands(char[][] grid) {
        int res = 0;
        for (int i=0; i < grid.Length; i++)
            for (int j=0; j < grid[i].Length; j++)
                if (grid[i][j] == '1')
                {
                    res++;
                    SinkIsland(grid, i, j);
                }
        return res;
    }

    /// sets all array items of the island at given index to 0
    private void SinkIsland(char[][] grid, int x, int y)
    {
        grid[x][y] = '0';
        // move to the next patch of land on the island for sinking
        if (x+1 < grid.Length && grid[x+1][y] == '1')
            SinkIsland(grid, x+1, y);
        if (y+1 < grid[0].Length && grid[x][y+1] == '1')
            SinkIsland(grid, x, y+1);
        if (x > 0 && grid[x-1][y] == '1')
            SinkIsland(grid, x-1, y);
        if (y > 0 && grid[x][y-1] == '1')
            SinkIsland(grid, x, y-1);
    }
}