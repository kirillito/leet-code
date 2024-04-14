public class Solution {
    public double[] ConvertTemperature(double celsius) {
        return new double[] { celsius + 273.15, celsius * 1.8 + 32.0 };
    }
}