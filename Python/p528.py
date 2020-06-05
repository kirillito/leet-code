from typing import List

class Solution:
    def __init__(self, w: List[int]):
        self.accumulatedW = list(itertools.accumulate(w))

    def pickIndex(self) -> int:
        return bisect.bisect_left(self.accumulatedW, random.randint(1,self.accumulatedW[-1]))


obj = Solution([1,3])
print(obj.pickIndex())
print(obj.pickIndex())
print(obj.pickIndex())


obj = Solution([1])
print(obj.pickIndex())
print(obj.pickIndex())
print(obj.pickIndex())
print(obj.pickIndex())
print(obj.pickIndex())
