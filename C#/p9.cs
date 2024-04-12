public class Solution {
    public bool IsPalindrome(int x) {
        if (x < 0)
            return false;

        if (x >= 0 && x < 10)
            return true;

        // create array of digits
        var digits = new List<byte>();
        while (x != 0)
        {
            digits.Add((byte)(x % 10));
            x = x / 10;
        }
        var len = digits.Count();

        // check for palindrome flag
        for (int i=0; i<=len/2; i++)
        {
            if (digits[i] != digits[len-i-1])
                return false;
        }

        return true;
    }
}