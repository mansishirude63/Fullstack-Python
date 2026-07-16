from django.urls import path
from . import views



urlpatterns = [
    path('createUser/', views.create_user, name='create_user'),
    path('getAllUsers/', views.getAllUsers, name='getAllUsers'),
    path('getUserById/<int:user_id>/', views.getUserById, name='getUserById'),
    path('updateUser/<int:user_id>/', views.updateUser, name='updateUser'),
    path('deleteUser/<int:user_id>/', views.deleteUser, name='deleteUser'),
]
