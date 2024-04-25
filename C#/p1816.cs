public class Solution {
    public string TruncateSentence(string s, int k) {
        return string.Join(" ", s.Split(" ").Take(k));
    }
}