public class Solution {
    public int MinimumSum(int num) {
        int[] arr = new int[4];
        arr[0] = num/1000;
        arr[1] = (num%1000)/100;
        arr[2] = (num%100)/10;
        arr[3] = num%10;
        arr = arr.OrderBy(x=>x).ToArray();

        return arr[0]*10+arr[1]*10+arr[2]+arr[3];
    }
}