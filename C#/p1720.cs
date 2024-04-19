public class Solution {
    public int[] Decode(int[] encoded, int first) {
        encoded = encoded.Prepend(first).ToArray();

        for (int i=1; i < encoded.Length; i++)
        {
            encoded[i] = encoded[i] ^ encoded[i-1];
        }

        return encoded;
    }
}