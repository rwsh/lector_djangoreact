from rest_framework.decorators import api_view
from rest_framework.response import Response
import math

from .models import HistoryXY  # импорт модели
from .serializers import HistoryXYSerializer

from rest_framework import status

@api_view(['POST'])
def clear_history(request):
    HistoryXY.objects.all().delete()
    return Response({'message': 'История очищена.'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def history(request):
    queryset = HistoryXY.objects.all().order_by('-id')
    serializer = HistoryXYSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def power(request):
    x = float(request.data.get('x', 1))
    y = float(request.data.get('y', 1))
    result = math.pow(x, y)

    # Сохраняем в историю
    HistoryXY.objects.create(x=x, y=y, result=result)

    return Response({
        'power': result
    })
