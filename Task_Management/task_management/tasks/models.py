from django.db import models

class Tasks(models.Model):
    status = [
        ('pending', 'Pending'),
        ('in_progress', 'InProgress'),
        ('completed', 'Completed')
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(
        max_length=20,
        choices = status,
        default = 'Pending'
    )

    def __str__(self):
        return self.title
    

