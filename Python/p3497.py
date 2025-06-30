import pandas as pd
from decimal import Decimal, getcontext, ROUND_HALF_UP

def analyze_subscription_conversion(user_activity: pd.DataFrame) -> pd.DataFrame:
    paid = user_activity[user_activity["activity_type"] == "paid"] \
        .groupby(["user_id"]) \
        .agg(
            paid_avg_duration = pd.NamedAgg(column="activity_duration", aggfunc=round_mean)
        ) \
        .reset_index()
    free_trial = user_activity[user_activity["activity_type"] == "free_trial"] \
        .groupby(["user_id"]) \
        .agg(
            trial_avg_duration = pd.NamedAgg(column="activity_duration", aggfunc=round_mean)
        ) \
        .reset_index()
    return paid.merge(free_trial, how="inner", left_on="user_id", right_on="user_id")[["user_id", "trial_avg_duration", "paid_avg_duration"]]

    
def round_mean(x):
    return Decimal(x.mean()).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)