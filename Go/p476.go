package main

import (
	"fmt"
)

func findComplement(num int) int {
	var tmp = num
	var mask = 1
	
	for (tmp > 0) {
		num = num ^ mask
		mask = mask << 1
		tmp = tmp >> 1
	}
	
	return num;
}

func main() {
	fmt.Println(findComplement(5))
	fmt.Println(findComplement(2))
	fmt.Println(findComplement(1))
}
