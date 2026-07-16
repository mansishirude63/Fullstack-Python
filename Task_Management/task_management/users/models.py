from django.db import models
from tasks.models import Tasks

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    contact_number = models.CharField(max_length=150)
    task_id = models.ForeignKey('tasks.Tasks', on_delete=models.CASCADE, related_name = 'users')

def __str__(self):
        return self.name
    