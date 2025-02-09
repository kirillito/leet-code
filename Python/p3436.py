import pandas as pd

def find_valid_emails(users: pd.DataFrame) -> pd.DataFrame:
    # Regular expression for valid emails
    email_regex = r'^[A-Za-z0-9_]+@[A-Za-z]+\.com$'

    # Filter valid emails
    return users[users["email"].str.match(email_regex, na=False)].sort_values(by="user_id")