import pandas as pd

def students_and_examinations(students: pd.DataFrame, subjects: pd.DataFrame, examinations: pd.DataFrame) -> pd.DataFrame:
    # aggregate attendance
    attendance = examinations \
        .groupby(["student_id","subject_name"]) \
        .agg(
            attended_exams=pd.NamedAgg(column="student_id", aggfunc="count")
        ) \
        .reset_index()

    # do cross join to create all possible variations of attendance 
    # and then do a left join on aggregated counters
    merged = students \
        .merge(subjects, how="cross") \
        .merge(attendance, how="left") \
        .sort_values(["student_id","subject_name"])

    # apparently student name can be null, so we can't do fillna on the whole DF
    merged["attended_exams"] = merged["attended_exams"].fillna(0)

    return merged