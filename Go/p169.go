package main

import (
	"fmt"
)

func majorityElement(nums []int) int {
	n := len(nums)
	frequencyCounter := make(map[int]int)
	
	for i:=0; i<len(nums); i++ {
        	if _, ok := frequencyCounter[nums[i]]; ok {
			frequencyCounter[nums[i]]++
	        } else {
			frequencyCounter[nums[i]] = 1
		}
		
		if (frequencyCounter[nums[i]] > n/2) {
			return nums[i]
		}
	}
	return -1
}

func main() {
	fmt.Println(majorityElement([]int {3,2,3}))
	fmt.Println(majorityElement([]int {2,2,1,1,1,2,2}))
	fmt.Println(majorityElement([]int {1}))
}