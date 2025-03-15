import pandas as pd

def list_products(products: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    agg_orders = orders \
        [(orders["order_date"] >= "2020-02-01") & (orders["order_date"] < "2020-03-01")] \
        .groupby("product_id") \
        .agg(
            unit=pd.NamedAgg(column="unit", aggfunc="sum")
        )
        
    return agg_orders[agg_orders["unit"] >= 100] \
        .merge(products, how="inner", on="product_id") \
        [["product_name", "unit"]]