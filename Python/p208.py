class TrieNode:
    def __init__(self):
        self.val = None
        self.left = None
        self.right = None

class Trie:
    def __init__(self):
        self.root = None
        

    def insert(self, word: str) -> None:
        node = TrieNode()
        node.val = word
        
        if self.root == None:
            self.root = node
            return
        
        current = self.root
        
        while True:
            if word < current.val:
                if current.left == None:
                    current.left = node
                    return
                current = current.left
                
            elif word > current.val:
                if current.right == None:
                    current.right = node
                    return
                current = current.right
            else:
                return
        
        return

    def search(self, word: str) -> bool:
        if self.root == None:
            return False
            
        current = self.root

        while current:
            if word < current.val:
                current = current.left
            elif word > current.val:
                current = current.right
            else:
                return True
            
        return False
        

    def startsWith(self, prefix: str) -> bool:
        if self.root == None:
            return False
            
        current = self.root

        while current:
            if current.val.startswith(prefix):
                return True
            elif prefix < current.val:
                current = current.left
            elif prefix > current.val:
                current = current.right
            else:
                return False
            
        return False
        

obj = Trie()
obj.insert("apple")
obj.insert("mango")
obj.insert("pineapple")
obj.insert("kiwi")
obj.insert("orange")
param_2 = obj.search("kiwi")
param_3 = obj.search("app")
print(param_2)
print(param_3)
param_4 = obj.startsWith("app")
print(param_4)
param_5 = obj.startsWith("k")
print(param_5)
param_6 = obj.startsWith("se")
print(param_6)
