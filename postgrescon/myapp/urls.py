from django.urls import path
from .views import *


urlpatterns = [
    path('', myapp, name='myapp'),
    path('admin/', myapp, name='myapp'),
    path('user/', UserListView.as_view(), name='user'),
    path('user/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('author/', AuthorListView.as_view(), name='author'),
    path('authors/<int:pk>/', AuthorDetailView.as_view(), name='author-detail'),
    path('books/', BookListView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
    path('orders/', OrdersListView.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrdersDetailView.as_view(), name='order-detail'),
    path('payments/', PaymentsListView.as_view(), name='payments-list'),
    path('payments/<int:pk>/', PaymentsDetailView.as_view(), name='payments-detail'),
     path('genres/', GenresListView.as_view(), name='genres-list'),
    path('genres/<int:pk>/', GenresDetailView.as_view(), name='genres-detail'),

    # path("", detail, name='detail'),
    
]