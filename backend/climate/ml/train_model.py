import pandas as pd
import joblib

from sklearn.ensemble import RandomForestClassifier


df = pd.read_csv("climate_data.csv")

X = df[
[
'temperature',
'humidity',
'rainfall',
'wind_speed',
'water_level'
]
]

y = df['risk']

model = RandomForestClassifier()

model.fit(X, y)

joblib.dump(model, "climate_model.pkl")

print("Model Saved")