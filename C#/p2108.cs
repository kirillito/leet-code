public class Solution {
    public string FirstPalindrome(string[] words) {
        return words.FirstOrDefault(w => w == new string(w.ToCharArray().Reverse().ToArray()), "");
    }
}