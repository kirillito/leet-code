package main

import (
	"fmt"
	"slices"
)

func maximizeSum(nums []int, k int) int {
	max := slices.Max(nums)
	return max*k + k*(k-1)/2
}

func main() {
	fmt.Println(maximizeSum([]int{1, 2, 3, 4, 5}, 3))
	fmt.Println(maximizeSum([]int{5, 5, 5}, 2))
}
