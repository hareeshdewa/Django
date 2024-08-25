from django.urls import path
from . import views

urlpatterns = [
    path('', views.demo_view, name = "demo_view"),
    path('chatbox/',views.chatbox,name = "chatbox"),
    path('register/',views.register,name = "register"),
    
]