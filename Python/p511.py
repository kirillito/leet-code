import pandas as pd

def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    return activity.sort_values("event_date") \
        .drop_duplicates(subset=["player_id"], keep="first") \
        .rename(columns={"event_date":"first_login"}) \
        [["player_id", "first_login"]]
        

