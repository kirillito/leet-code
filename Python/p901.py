import time

'''
# Alt solution

class StockSpanner:

    def __init__(self):
        self.prices = []
        return

    def next(self, price: int) -> int:
        span = 1
        
        while self.prices and self.prices[-1][0] <= price:
            span += self.prices.pop()[1]
        
        self.prices.append((price,span))

        return span
'''

class StockSpanner:

    def __init__(self):
        self.prices = []
        self.spans = []
        return

    def next(self, price: int) -> int:
        self.prices.append(price)

        #print(self.spans[-2], self.spans[-1])

        if not self.spans:
            self.spans.append(1)
        else:
            span = 1

            i = len(self.prices)-2

            while i>=0:
                if self.prices[i] > price:
                    break
                elif self.prices[i] < price:
                    span += self.spans[i]
                else: #self.prices[i] == price:
                    self.spans.append(span + self.spans[i])
                    return self.spans[-1]

                i -= self.spans[i]

            self.spans.append(span)

        return self.spans[-1]


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
# ,[31],[41],[48],[59],[79]]

# 1,1,1,2,1,4,6
s = StockSpanner()        
res = s.next(100)
print(res)
res = s.next(80)
print(res)
res = s.next(60)
print(res)
res = s.next(70)
print(res)
res = s.next(60)
print(res)
res = s.next(75)
print(res)
res = s.next(85)
print(res)

print("========")

# 1,2,3,4,5
s = StockSpanner()        
res = s.next(31)
print(res)
res = s.next(41)
print(res)
res = s.next(48)
print(res)
res = s.next(59)
print(res)
res = s.next(79)
print(res)

print("========")

# 1,2,1,2,1
s = StockSpanner()        
res = s.next(29)
print(res)
res = s.next(91)
print(res)
res = s.next(62)
print(res)
res = s.next(76)
print(res)
res = s.next(51)
print(res)

print("========")

# 1,1,3,4,5,6,7,8,9,10
s = StockSpanner()        
res = s.next(28)
print(res)
res = s.next(14)
print(res)
res = s.next(28)
print(res)
res = s.next(35)
print(res)
res = s.next(46)
print(res)
res = s.next(53)
print(res)
res = s.next(66)
print(res)
res = s.next(80)
print(res)
res = s.next(87)
print(res)
res = s.next(88)
print(res)

print("========")
#1,2,3,4,5,6,1,2,3,4,5,1,13,14,15
s = StockSpanner()        
res = s.next(3)
print(res)
res = s.next(5)
print(res)
res = s.next(8)
print(res)
res = s.next(8)
print(res)
res = s.next(14)
print(res)
res = s.next(56)
print(res)
res = s.next(25)
print(res)
res = s.next(30)
print(res)
res = s.next(32)
print(res)
res = s.next(42)
print(res)
res = s.next(43)
print(res)
res = s.next(15)
print(res)
res = s.next(75)
print(res)
res = s.next(76)
print(res)
res = s.next(81)
print(res)


print("========")
# 1,2,3,4,1,2,7,1,2,3,4,5,6,14,1,2,3,1,1,6
# 0.00011777877807617188
# 0.00011730194091796875
# 0.00010037422180175781
start = time.time()

s = StockSpanner()        
res = s.next(3)
print(res)
res = s.next(4)
print(res)
res = s.next(21)
print(res)
res = s.next(69)
print(res)
res = s.next(29)
print(res)
res = s.next(35)
print(res)
res = s.next(98)
print(res)
res = s.next(46)
print(res)
res = s.next(50)
print(res)
res = s.next(53)
print(res)
res = s.next(58)
print(res)
res = s.next(59)
print(res)
res = s.next(69)
print(res)
res = s.next(98)
print(res)
res = s.next(69)
print(res)
res = s.next(73)
print(res)
res = s.next(74)
print(res)
res = s.next(41)
print(res)
res = s.next(27)
print(res)
res = s.next(78)
print(res)

end = time.time()
print("Time:", end - start)
