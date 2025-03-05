from django.contrib import admin

# Register your models here.
from .models import user, Author, Book, Orders, OrderDetails, Payments, Genres

admin.site.register(user)
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Orders)
admin.site.register(OrderDetails)
admin.site.register(Payments)
admin.site.register(Genres)
