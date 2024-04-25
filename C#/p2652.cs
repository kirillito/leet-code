public class Solution {
    private int[] sieve;

    public int SumOfMultiples(int n) {
        this.sieve = new int[n+1];

        return GetSumOfMultiplesForX(3, n) 
            + GetSumOfMultiplesForX(5, n) 
            + GetSumOfMultiplesForX(7, n);
    }

    private int GetSumOfMultiplesForX(int x, int n)
    {
        int res = 0;
        int i = x;
        while (i<=n)
        {
            if (sieve[i] != 1)
            {
                sieve[i] = 1;
                res += i;
            }
            i += x;
        }
        return res;
    }
}