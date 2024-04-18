public class ParkingSystem {
    private int _big;
    private int _medium;
    private int _small;

    public ParkingSystem(int big, int medium, int small) {
        _big = big;
        _medium = medium;
        _small = small;
    }
    
    public bool AddCar(int carType) {
        switch(carType)
        {
            case 1:
                if (_big > 0)
                {
                    _big--;
                    return true;
                }
                break;
            case 2:
                if (_medium > 0)
                {
                    _medium--;
                    return true;
                }
                break;
            case 3:
                if (_small > 0)
                {
                    _small--;
                    return true;
                }
                break;
        }
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj.AddCar(carType);
 */