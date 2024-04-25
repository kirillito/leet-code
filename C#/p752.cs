public class Solution {
    public int OpenLock(string[] deadends, string target) {
        if (deadends.Contains("0000"))
            return -1;
        int[] deadints = deadends.Select(d => int.Parse(d)).ToArray();

        // generate graph
        List<List<int>> graph = GetGraph();
        Queue<int> queue = new Queue<int>();

        int[] moves = Enumerable.Repeat(-1, 10000).ToArray();
        queue.Enqueue(0);
        moves[0] = 0;

        while (queue.Count > 0)
        {
            int lck = queue.Dequeue();
            if (lck == int.Parse(target))
                return moves[lck];
            
            foreach (var neighbour in graph[lck])
            {
                if (moves[neighbour]<0 && !deadints.Contains(neighbour))
                {
                    moves[neighbour] = moves[lck]+1;
                    queue.Enqueue(neighbour);
                }
            }
        }

        return -1;
    }

    private List<List<int>> GetGraph()
    {
        var res = new List<List<int>>();

        for (int i=0; i<10000; i++)
        {
            var edges = new List<int>();
            var digit = i % 10;
            edges.Add(digit == 9 ? i - 9 : i + 1);
            edges.Add(digit == 0 ? i + 9 : i - 1);
            digit = (i % 100 - i % 10) / 10;
            edges.Add(digit == 9 ? i - 90 : i + 10);
            edges.Add(digit == 0 ? i + 90 : i - 10);
            digit = (i % 1000 - i % 100) / 100;
            edges.Add(digit == 9 ? i - 900 : i + 100);
            edges.Add(digit == 0 ? i + 900 : i - 100);
            digit = i / 1000;
            edges.Add(digit == 9 ? i - 9000 : i + 1000);
            edges.Add(digit == 0 ? i + 9000 : i - 1000);
            res.Add(edges);
        }

        return res;
    }
}