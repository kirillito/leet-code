import pandas as pd

def find_valid_serial_products(products: pd.DataFrame) -> pd.DataFrame:
    return products[products["description"].str.contains("(^|\ )SN\d{4}-\d{4}($|\ )")]