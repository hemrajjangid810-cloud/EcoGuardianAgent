import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
model = joblib.load(BASE_DIR / "climate_model.pkl")


def predict_risk(data):

    prediction = model.predict([[
        data['temperature'],
        data['humidity'],
        data['rainfall'],
        data['wind_speed'],
        data['water_level']
    ]])

    return prediction[0]
