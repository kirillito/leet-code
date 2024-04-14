public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
        var x = 0;
        foreach (var op in operations)
        {
            if (op == "--X")
                --x;
            else if (op == "++X")
                ++x;
            else if (op == "X++")
                x++;
            else if (op == "X--")
                x--;
        }
        return x;
    }
}