public class Solution {
    public IList<int> FindWordsContaining(string[] words, char x) {
        return words
            .Select((w, index) => w.Contains(x) ? index : -1)
            .Where(i => i>=0)
            .ToList();
    }
}