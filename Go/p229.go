package main

import (
	"fmt"
)

func majorityElement(nums []int) []int {
	res := []int {}

 	size := len(nums)

	
	counter1:= 0
	counter2 := 0
	
	var maj1 int
	var maj2 int
	
	for i:=0; i<size; i++ {
		if (counter1 == 0 && nums[i] != maj2) {
			maj1 = nums[i]
			counter1= 1
		} else if (nums[i] == maj1) {
			counter1++
		} else if (counter2 == 0) {
			maj2 = nums[i]
			counter2 = 1
		} else if (nums[i] == maj2) {
			counter2++
		} else {
			counter1--
			counter2--
		}
	}	

	counter1 = 0
	counter2 = 0
	
	for i:=0; i<size; i++ {
		if (nums[i] == maj1) {
			counter1++
		} else if (nums[i] == maj2) {
			counter2++
		}
	}

	if (counter1 > size / 3) {
		res = append(res, maj1)
	}
	if (counter2 > size / 3) {
		res = append(res, maj2)
	}

	return res
}


func main() {
	fmt.Println(majorityElement([]int {3,2,3,}))
	fmt.Println(majorityElement([]int {1,1,1,3,3,2,2,2}))
	fmt.Println(majorityElement([]int {1}))
	fmt.Println(majorityElement([]int {1,2,2,3,2,1,1,3}))

}