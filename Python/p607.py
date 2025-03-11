import pandas as pd

def sales_person(sales_person: pd.DataFrame, company: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    ordersRed = orders.merge(company, how="inner", on="com_id").query("name == 'RED'")
    sales_person_orders = sales_person.merge(ordersRed, how="left", on="sales_id", suffixes=("_seller","_company"))

    return sales_person_orders.query("name_company.isnull()")[["name_seller"]].rename(columns={"name_seller":"name"})