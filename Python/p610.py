import pandas as pd

def triangle_judgement(triangle: pd.DataFrame) -> pd.DataFrame:
    triangle["triangle"] = triangle.apply(lambda t: "Yes" if ((t["x"] + t["y"] > t["z"]) \
        and (t["x"] + t["z"] > t["y"]) \
        and (t["z"] + t["y"] > t["x"])) else "No", axis=1)
    return triangle