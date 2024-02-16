from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', RegisterView.as_view(), name="sign_up"),
    path('auth/usersList/', UserList.as_view(), name="get_users"),
    
    # user account CRUD
    path('user/update/<int:pk>/', UserUpdate.as_view(), name="user_details_list"), #update the user username only 
    path('user/delete/<int:pk>/', UserDeleteAPIView.as_view(), name='user-delete'),  #delete the whole username account
    path('userdetails/', UserDetailsRetrieveUpdateView.as_view(), name='user_details_retrieve_update'), # read and update the userdetails 
    
    
    # Admin-only URLs
    path('admin/users/', AdminUserListView.as_view(), name='admin-user-list'),
    path('admin/users/<int:user_id>/', AdminUserDetailView.as_view(), name='admin-user-detail'),
    
    # password-reset
    path('password-reset-email/', EmailCheckAPIView.as_view(), name='send_email'),
    path('update-password/', PasswordUpdateAPIView.as_view(), name='password_update'),

]
