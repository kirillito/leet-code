import pandas as pd

def top_travellers(users: pd.DataFrame, rides: pd.DataFrame) -> pd.DataFrame:
    grouped_rides = rides \
        .groupby("user_id").agg(
            travelled_distance=pd.NamedAgg(column="distance", aggfunc="sum")
        )
    return users \
        .merge(grouped_rides, how="left", left_on="id", right_on="user_id") \
        .fillna(0) \
        .sort_values(["travelled_distance","name"], ascending=[False, True]) \
        [["name", "travelled_distance"]]