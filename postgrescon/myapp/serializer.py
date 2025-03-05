from rest_framework import serializers
from .models import user , Author, Book, Orders, Payments, Genres

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['id','name', 'email']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'name', 'email']     


from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'published_date']           

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['order_id', 'user', 'order_date', 'total_amount']

class PaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payments
        fields = ['payment_id', 'order'] 

class GenresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genres
        fields = ['genre_id', 'name', 'book']              