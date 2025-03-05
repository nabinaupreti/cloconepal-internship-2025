from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import user , Author, Book, Orders, Payments, Genres
from .serializer import UserSerializer
from .serializer import AuthorSerializer , BookSerializer
from .serializer import OrdersSerializer
from .serializer import PaymentsSerializer
from .serializer import GenresSerializer

# Create your views here.

# from django.http import HttpResponse

# def myapp(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

# def detail(request, question_id):
#     return HttpResponse("You're looking at question %s." % question_id)

def myapp(request):
    item_list = ["Coffee", "Tea", "Juice", "Milk", "Smoothie"]  # Sample list
    return render(request, 'myapp/index.html', {'items': item_list})

class UserListView(APIView):
    def get(self, request):
        users = user.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(APIView):
    def get(self, request, pk):
        try:
            user_instance = user.objects.get(pk=pk)
        except user.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer(user_instance)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            user_instance = user.objects.get(pk=pk)
        except user.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer(user_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            user_instance = user.objects.get(pk=pk)
        except user.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        user_instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class AuthorListView(APIView):
    def get(self, request):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthorDetailView(APIView):
    def get(self, request, pk):
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = AuthorSerializer(author)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = AuthorSerializer(author, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        author.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BookListView(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookDetailView(APIView):
    def get(self, request, pk):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = BookSerializer(book)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class OrdersListView(APIView):
    def get(self, request):
        orders = Orders.objects.all()
        serializer = OrdersSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrdersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

class OrdersDetailView(APIView):
    def get(self, request, pk):
        try:
            order = Orders.objects.get(pk=pk)
        except Orders.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = OrdersSerializer(order)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            order = Orders.objects.get(pk=pk)
        except Orders.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = OrdersSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            order = Orders.objects.get(pk=pk)
        except Orders.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class PaymentsListView(APIView):
    def get(self, request):
        payments = Payments.objects.all()
        serializer = PaymentsSerializer(payments, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PaymentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PaymentsDetailView(APIView):
    def get(self, request, pk):
        try:
            payment = Payments.objects.get(pk=pk)
        except Payments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = PaymentsSerializer(payment)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            payment = Payments.objects.get(pk=pk)
        except Payments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = PaymentsSerializer(payment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            payment = Payments.objects.get(pk=pk)
        except Payments.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        payment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class GenresListView(APIView):
    def get(self, request):
        genres = Genres.objects.all()
        serializer = GenresSerializer(genres, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = GenresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GenresDetailView(APIView):
    def get(self, request, pk):
        try:
            genre = Genres.objects.get(pk=pk)
        except Genres.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = GenresSerializer(genre)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            genre = Genres.objects.get(pk=pk)
        except Genres.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = GenresSerializer(genre, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            genre = Genres.objects.get(pk=pk)
        except Genres.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        genre.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
