class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        frequenceyCounter1 = {}
        frequenceyCounter2 = {}
        
        for i in ransomNote:
            if i not in frequenceyCounter1:
                frequenceyCounter1[i] = 0
            frequenceyCounter1[i] = frequenceyCounter1[i] + 1
        
        for i in magazine:
            if i not in frequenceyCounter2:
                frequenceyCounter2[i] = 0
            frequenceyCounter2[i] = frequenceyCounter2[i] + 1
        
        for c in frequenceyCounter1:
            if (not c in frequenceyCounter2 or frequenceyCounter1[c] > frequenceyCounter2[c]):
                return False

        return True;

s = Solution()        
print(s.canConstruct("", "sdasdasdb"))
print(s.canConstruct("asdasdas", ""))
print(s.canConstruct("dafuj", "asdajkgkdafgialfgsjagdakjdgjsaldijsugiu"))
print(s.canConstruct("a", "b"))
print(s.canConstruct("aa", "ab"))
print(s.canConstruct("aa", "aab"))
