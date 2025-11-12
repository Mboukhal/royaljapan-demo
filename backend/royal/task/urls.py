
from django.urls import path
from royal.task.views import *
urlpatterns = [
    path('healthz', health_check),
    path('api/get-list', delayed_list),
    path('api/stake', stake_value),
]

