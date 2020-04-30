var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of s){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of t){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
};

//isAnagram('anagram','nagaram')
//isAnagram('rat','car')
isAnagram('','')
