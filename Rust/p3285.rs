impl Solution {
    pub fn stable_mountains(height: Vec<i32>, threshold: i32) -> Vec<i32> {
        let mut stable: Vec<i32> = vec![];

        for i in 1..height.len() {
            if height[i-1] > threshold {
                stable.push(i.try_into().unwrap());
            }
        }

        stable
    }
}