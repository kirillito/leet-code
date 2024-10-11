impl Solution {
    pub fn maximize_sum(nums: Vec<i32>, k: i32) -> i32 {
        if let Some(&max) = nums.iter().max() {
            return max*k+k*(k-1)/2;
        } else {
            return 0;
        }
    }
}