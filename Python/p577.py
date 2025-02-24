import pandas as pd

def employee_bonus(employee: pd.DataFrame, bonus: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(employee, bonus, how="left")
    return merged.query('bonus.isnull() | bonus<1000')[["name", "bonus"]]