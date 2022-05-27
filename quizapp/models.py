from django.db import models

class Questions(models.Model):
    question = models.TextField(max_length=200)
    option1 = models.TextField(max_length=50)
    option2 = models.TextField(max_length=50)
    option3 = models.TextField(max_length=50)
    option4 = models.TextField(max_length=50)
    correctoption = models.TextField(max_length=2)
