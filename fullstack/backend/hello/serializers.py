# serializers.py
from rest_framework import serializers
from .models import HistoryXY

class HistoryXYSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoryXY
        fields = ['id', 'x', 'y', 'result']
