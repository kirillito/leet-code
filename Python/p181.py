import pandas as pd

def find_employees(employee: pd.DataFrame) -> pd.DataFrame:
    merged = employee.merge(
        employee, 
        how='inner', 
        left_on='managerId', 
        right_on='id', 
        suffixes=['_employee','_manager']
    )
    return merged[merged['salary_employee'] > merged['salary_manager']][['name_employee']] \
        .rename(columns={'name_employee':'Employee'})