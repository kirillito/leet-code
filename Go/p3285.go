package main

import (
	"fmt"
)

func stableMountains(height []int, threshold int) []int {
	stable := []int{}

	for i := 1; i < len(height); i++ {
		if height[i-1] > threshold {
			stable = append(stable, i)
		}
	}

	return stable
}

func main() {
	fmt.Println(stableMountains([]int{1, 2, 3, 4, 5}, 2))
	fmt.Println(stableMountains([]int{10, 1, 10, 1, 10}, 3))
	fmt.Println(stableMountains([]int{10, 1, 10, 1, 10}, 10))
}
