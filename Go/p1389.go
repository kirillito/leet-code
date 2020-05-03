package main

import (
	"fmt"
)

func insertIntoSlice(arr []int, index int, number int) []int {
	arr = append(arr, 0)
	copy(arr[index+1:], arr[index:])
	arr[index] = number
	
	return arr
}

func createTargetArray(nums []int, index []int) []int {
	var res = []int {}
	
	for i, num := range nums {
		res = insertIntoSlice(res, index[i], num)		
	}

	return res
}

func main() {
	fmt.Println(createTargetArray([]int {0,1,2,3,4}, []int {0,1,2,2,1}))
	fmt.Println(createTargetArray([]int {1,2,3,4,0}, []int {0,1,2,3,0}))
	fmt.Println(createTargetArray([]int {1}, []int {0}))
	fmt.Println(createTargetArray([]int {}, []int {}))
}