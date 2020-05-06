package main

import (
	"fmt"
)

func bitwiseComplement(N int) int {
    if (N == 0) {
        return 1
    }
    
    var tmp = N
    var mask = 1
	
    for (tmp > 0) {
        N = N ^ mask
        mask = mask << 1
        tmp = tmp >> 1
    }
	
    return N;
}

func main() {
	fmt.Println(bitwiseComplement(5))
	fmt.Println(bitwiseComplement(2))
	fmt.Println(bitwiseComplement(1))
	fmt.Println(bitwiseComplement(0))
}
