import pandas as pd

def largest_orders(orders: pd.DataFrame) -> pd.DataFrame:
    return orders \
        .groupby("customer_number") \
        .count() \
        .sort_values('order_number', ascending=False) \
        .reset_index() \
        .head(1)[["customer_number"]]