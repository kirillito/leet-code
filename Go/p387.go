package main

import (
	"fmt"
)

func firstUniqChar(s string) int {
    frequencyCounter := make(map[byte]int)
    firstIndex := make(map[byte]int)
    
    for i:=0; i<len(s); i++ {
        if _, ok := frequencyCounter[s[i]]; ok {
		frequencyCounter[s[i]]++
        } else {
		frequencyCounter[s[i]] = 1
		firstIndex[s[i]] = i
	}
    }

    first := -1
    for key,val := range frequencyCounter {
	if val == 1 {
		if first == -1 || firstIndex[key] < first {
			first = firstIndex[key]
		}
	}
    }

    return first;
}

func main() {
	fmt.Println(firstUniqChar("leetcode"))
	fmt.Println(firstUniqChar("loveleetcode"))
	fmt.Println(firstUniqChar(""))
}
