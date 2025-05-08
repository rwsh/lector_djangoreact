from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import power, history, clear_history

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('power/', power),
    path('history/', history),
    path('history/clear/', clear_history),
]