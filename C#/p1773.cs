public class Solution {
    public int CountMatches(IList<IList<string>> items, string ruleKey, string ruleValue) {
        switch(ruleKey) {
            case "type":
                return items.Count(i => i[0] == ruleValue);
            case "color":
                return items.Count(i => i[1] == ruleValue);
            case "name":
                return items.Count(i => i[2] == ruleValue);
            default:
                return 0;
        }            
    }
}