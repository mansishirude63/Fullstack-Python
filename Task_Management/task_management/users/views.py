from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import User
from .serializers import UserSerializers



@api_view(['POST'])
def create_user(request):
    serializer = UserSerializers(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            "success": True,
            "message": "User added successfully",
            "user": serializer.data
            }, status=status.HTTP_201_CREATED)
    
    return Response({
        "success": False,
        "message": "Failed to add user",
        "errors": serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializers(users, many=True)

    return Response({
        "success": True,
        "users": serializer.data
    }, status=status.HTTP_200_OK)

@api_view(['GET'])
def getUserById(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        serializer = UserSerializers(user)

        return Response({
            "success": True,
            "user": serializer.data
        }, status=status.HTTP_200_OK)
    
    except User.DoesNotExist:
        return Response({
            "success": False,
            "message": "User not found"
        }, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['PUT'])
def updateUser(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({
            "success": False,
            "message": "User not found"
        }, status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializers(user, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "success": True,
            "message": "User updated successfully",
            "user": serializer.data
        }, status=status.HTTP_200_OK)
    
    return Response({
        "success": False,
        "message": "Failed to update user",
        "errors": serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteUser(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        user.delete()
        return Response({
            "success": True,
            "message": "User deleted successfully"
        }, status=status.HTTP_200_OK)
    
    except User.DoesNotExist:
        return Response({
            "success": False,
            "message": "User not found"
        }, status=status.HTTP_404_NOT_FOUND)