from rest_framework import serializers
from .models import User


class UserSerializers(serializers.ModelSerializer):

    taskTitle = serializers.CharField(
        source='task_id.title',
        read_only=True

    )

    class Meta:
        model = User
        fields = [
            'id',
            'name',
            'email',
            'contact_number',
            'task_id',
            'taskTitle' 
        ]