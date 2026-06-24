from django.urls import path
from .views import analyze_pdf, predict_climate_risk, sustainability_chat
from .views import prediction_history
from .views import sustainability_score
from .views import calculate_impact
from .views import weather_data

urlpatterns = [
    path(
        'predict-risk/',
        predict_climate_risk
    ),
    path(
    'history/',
    prediction_history
),

path(
    'sustainability-score/',
    sustainability_score
),

path(
    'chat/',
    sustainability_chat
),

path(
    'analyze-pdf/',
    analyze_pdf
),
path(
    'impact-calculator/',
    calculate_impact
),
path(
    'weather/',
    weather_data
),

]