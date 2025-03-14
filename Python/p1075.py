import pandas as pd

def project_employees_i(project: pd.DataFrame, employee: pd.DataFrame) -> pd.DataFrame:
    return project.merge(employee, how='inner') \
        .groupby('project_id', as_index=False) \
        .agg(
            average_years=pd.NamedAgg(column="experience_years", aggfunc=round_mean)
        )

def round_mean(x):
    return round(x.mean(), 2)