public class Solution {
    public int MostWordsFound(string[] sentences) {
        return sentences.Select(s => s.Split(' ').Count()).Max();
    }
}