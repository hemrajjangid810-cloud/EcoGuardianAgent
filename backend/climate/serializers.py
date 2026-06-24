from rest_framework import serializers
from .models import ClimatePrediction


class ClimatePredictionSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClimatePrediction
        fields = "__all__"