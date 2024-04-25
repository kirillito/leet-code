public class Solution {
    public bool ValidPath(int n, int[][] edges, int source, int destination) {
        if (source == destination)
            return true;

        bool[] visited = Enumerable.Repeat(false, n).ToArray();
        visited[source] = true;

        bool isMoved = true;
        while (isMoved)
        {
            isMoved = false;
            for (int i=0; i < edges.Length; i++)
            {
                if (visited[edges[i][0]] != visited[edges[i][1]])
                {
                    visited[edges[i][0]] = true;
                    visited[edges[i][1]] = true;
                    isMoved = true;
                }
                // check if destination is marked as visited
                if (visited[destination])
                    return true;
            }
        }

        return false;
    }
}