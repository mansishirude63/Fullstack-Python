
from django.tasks import task
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Tasks
from .serializers import TaskSerializers
# from task_management.tasks import serializers

@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializers(data = request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "success" : True,
            "message" : "Task created successfully",
            "task" : serializer.data
        }, status = status.HTTP_201_CREATED)



    return Response({
        "success": False,
        "error": serializer.errors
    }, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_tasks(request):
    tasks = Tasks.objects.all()
    serializer = TaskSerializers(tasks, many = True)

    return Response({
        "success" : True,
        "tasks" : serializer.data
    })

@api_view(['GET'])
def get_task_by_id(request, id):
    try:
        task = Tasks.objects.get(id = id)
        serializer = TaskSerializers(task)

        return Response({
            "success" : True,
            "task" : serializer.data
        })
    
    except Tasks.DoesNotExist:
        return Response({
            "success" : False,
            "message" : "Task not found"
        }, status = status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def update_task(request, id):
    try:

        task = Tasks.objects.get(id = id)

    except Tasks.DoesNotExist:
        return Response({
            "success" : False,
            "message" : "Task not found"
        }, status = status.HTTP_404_NOT_FOUND)
    
    serializer = TaskSerializers(task, data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "success" : True,
            "message" : "Task updated successfully",
            "task" : serializer.data
        })
    return Response({
        "success" : False,
        "error" : serializer.errors     
    }, status = status.HTTP_400_BAD_REQUEST) 

@api_view(['DELETE'])
def delete_task(request, id):
    try:
        task = Tasks.objects.get(id = id)
        task.delete()
        return Response({
            "success" : True,
            "message" : "Task deleted successfully"
        })
    except Tasks.DoesNotExist:
        return Response({
            "success" : False,
            "message" : "Task not found"
        }, status = status.HTTP_404_NOT_FOUND)
