public class Solution {
    public int IslandPerimeter(int[][] grid) {
        int res = 0;

        // count vertical lines
        for (int i=0; i < grid.Length; i++)
            for (int j=0; j < grid[i].Length; j++)
            {
                if (grid[i][j] == 1 && j == 0)
                    res++;
                if (grid[i][j] == 1 && j == grid[i].Length-1)
                    res++;
                if (j < grid[i].Length-1 && grid[i][j] != grid[i][j+1])
                    res++;
            }

        // count horizontal lines
        for (int j=0; j < grid[0].Length; j++)
            for (int i=0; i < grid.Length; i++)
            {
                if (grid[i][j] == 1 && i == 0)
                    res++;
                if (grid[i][j] == 1 && i == grid.Length-1)
                    res++;
                if (i < grid.Length-1 && grid[i][j] != grid[i+1][j])
                    res++;
            }

        return res;
    }
}