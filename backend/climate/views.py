from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import ClimatePrediction
from .serializers import ClimatePredictionSerializer
from .ml.predict import predict_risk

from PyPDF2 import PdfReader
import requests


import google.generativeai as genai
from django.conf import settings

genai.configure(
    api_key=settings.GEMINI_API_KEY
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

# import google.generativeai as genai
# from django.conf import settings

# genai.configure(
#     api_key=settings.GEMINI_API_KEY
# )

# import google.generativeai as genai
# from django.conf import settings

# genai.configure(
#     api_key=settings.GEMINI_API_KEY
# )

# model = genai.GenerativeModel("gemini-pro")

# ==========================
# Prediction History API
# ==========================
@api_view(['GET'])
def prediction_history(request):

    predictions = ClimatePrediction.objects.order_by('-created_at')[:10]

    serializer = ClimatePredictionSerializer(
        predictions,
        many=True
    )

    return Response(serializer.data)


# ==========================
# Climate Risk Prediction API
# ==========================
@api_view(['POST'])
def predict_climate_risk(request):

    data = request.data

    risk = predict_risk(data)

    ClimatePrediction.objects.create(
        temperature=data['temperature'],
        humidity=data['humidity'],
        rainfall=data['rainfall'],
        wind_speed=data['wind_speed'],
        water_level=data['water_level'],
        risk_level=risk
    )

    recommendations = {
        "High": "Store water, monitor alerts, prepare emergency kits.",
        "Medium": "Stay updated with weather forecasts.",
        "Low": "Normal conditions. Continue monitoring."
    }

    return Response({
        "risk": risk,
        "recommendation": recommendations.get(risk)
    })


# ==========================
# Sustainability Score API
# ==========================
@api_view(['GET'])
def sustainability_score(request):

    total_predictions = ClimatePrediction.objects.count()

    high_risk = ClimatePrediction.objects.filter(
        risk_level="High"
    ).count()

    if total_predictions == 0:
        score = 100
    else:
        score = max(
            0,
            100 - int((high_risk / total_predictions) * 100)
        )

    water_awareness = max(
        0,
        min(100, score + 10)
    )

    overall_score = max(
        0,
        min(
            100,
            int((score + water_awareness) / 2)
        )
    )

    return Response({
        "climate_preparedness": score,
        "water_awareness": water_awareness,
        "overall_score": overall_score
    })


# ==========================
# AI Sustainability Chatbot
# ==========================

@api_view(['POST'])
def sustainability_chat(request):

    try:
        question = request.data.get("question")

        prompt = f"""
        You are EcoGuardian AI.

        Answer only about:
        - Sustainability
        - Climate Change
        - Floods
        - Droughts
        - Water Conservation
        - Renewable Energy
        - SDGs

        Question:
        {question}
        """

        response = model.generate_content(prompt)

        return Response({
            "answer": response.text
        })

    except Exception as e:

        return Response({
            "answer": f"Error: {str(e)}"
        })


# @api_view(['POST'])
# def sustainability_chat(request):

#     question = request.data.get(
#         "question",
#         ""
#     ).lower().strip()

#     climate_data = {

#         "water": """
# 💧 Water Conservation Tips:
# • Fix leaking taps
# • Use rainwater harvesting
# • Reduce unnecessary water usage
# • Reuse greywater where possible
#         """,

#         "flood": """
# 🌊 Flood Safety:
# • Monitor weather alerts
# • Keep emergency kits ready
# • Move valuables to higher ground
# • Avoid flooded roads
#         """,

#         "drought": """
# ☀️ Drought Management:
# • Use drip irrigation
# • Conserve groundwater
# • Plant drought-resistant crops
# • Store water efficiently
#         """,

#         "climate": """
# 🌍 Climate Action:
# • Reduce carbon emissions
# • Use renewable energy
# • Plant more trees
# • Support sustainable transportation
#         """,

#         "energy": """
# ⚡ Clean Energy:
# • Use solar panels
# • Switch to LED lighting
# • Reduce electricity wastage
# • Monitor energy consumption
#         """,

#         "waste": """
# ♻ Waste Management:
# • Separate recyclable waste
# • Reduce plastic usage
# • Compost organic waste
# • Promote recycling
#         """
#     }

#     for keyword, answer in climate_data.items():

#         if keyword in question:

#             return Response({
#                 "category": keyword.title(),
#                 "answer": answer
#             })

#     return Response({
#         "category": "General",
#         "answer": """
# Please ask about:
# • Water Conservation
# • Flood Safety
# • Drought Management
# • Climate Action
# • Energy Sustainability
# • Waste Management
# """
#     })

# ==========================
# PDF Analyzer API
# ==========================
@api_view(['POST'])
def analyze_pdf(request):

    pdf_file = request.FILES.get('file')

    if not pdf_file:
        return Response({
            "error": "No file uploaded"
        })

    reader = PdfReader(pdf_file)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text

    summary = text[:700]

    risks = [
        "Climate change impacts",
        "Resource management challenges",
        "Environmental sustainability concerns"
    ]

    recommendations = [
        "Promote renewable energy adoption",
        "Reduce carbon emissions",
        "Support sustainable development initiatives"
    ]

    sdg_alignment = [
        "SDG 13 - Climate Action",
        "SDG 7 - Affordable & Clean Energy",
        "SDG 11 - Sustainable Cities & Communities"
    ]

    return Response({
        "summary": summary,
        "risks": risks,
        "recommendations": recommendations,
        "sdg_alignment": sdg_alignment
    })

@api_view(['POST'])
def calculate_impact(request):

    electricity = float(
        request.data.get("electricity", 0)
    )

    water = float(
        request.data.get("water", 0)
    )

    transport = request.data.get(
        "transport",
        "public"
    )

    carbon_score = (
        electricity * 0.5 +
        water * 0.02
    )

    if transport == "car":
        carbon_score += 30

    elif transport == "bike":
        carbon_score += 10

    elif transport == "public":
        carbon_score += 5

    if carbon_score < 50:
        rating = "Excellent"

    elif carbon_score < 100:
        rating = "Good"

    else:
        rating = "Needs Improvement"

    return Response({
        "carbon_score": round(carbon_score, 2),
        "rating": rating
    })

@api_view(['GET'])
def weather_data(request):

    city = request.GET.get("city", "Jaipur")

    url = f"https://wttr.in/{city}?format=j1"

    response = requests.get(url)

    data = response.json()

    current = data["current_condition"][0]

    return Response({
        "city": city,
        "temperature": current["temp_C"],
        "humidity": current["humidity"],
        "weather": current["weatherDesc"][0]["value"]
    })






# 📄 Summary:
# This document contains information extracted from the uploaded PDF.

# 📊 Document Length:
# {text.count(' ') // 200} pages of readable content (estimated).

# 🔑 Key Insights:
# {text[:500]}

# 🌱 Sustainability Relevance:
# This document may contain sustainability,
# climate, energy, or environmental information
# that can help users make informed decisions.
# """

        # summary = text[:1000]

    # return Response({
    #     "summary": summary


   
    