from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def demo_view(request):
    return render(request,'rant.html')

def chatbox(request):
    return render(request,'chatbox.html')

def register(request):
    return render(request,"register.html")