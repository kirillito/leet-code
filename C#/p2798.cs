public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        return hours.Where(h => h >= target).Count();
    }
}