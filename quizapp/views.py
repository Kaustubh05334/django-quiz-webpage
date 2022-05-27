from django.shortcuts import render
from django.http import HttpResponse

from .models import Questions
# Create your views here.
def quiz(request):
    temp = Questions.objects.all()
    dict1 = {
        'question':[],
        'option1':[],
        'option2':[],
        'option3':[],
        'option4':[],
        'correctoption':[],
    }
    for item in temp:
        dict1['question'].append(item.question)
        dict1['option1'].append(item.option1)
        dict1['option2'].append(item.option2)
        dict1['option3'].append(item.option3)
        dict1['option4'].append(item.option4)
        dict1['correctoption'].append(item.correctoption)
    params = {'object':Questions.objects.all(),"dict":dict1}
    
    return render(request,'quizapp/index.html',params)

