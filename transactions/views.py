from rest_framework import viewsets
from .models import Transaction
from .serializers import TransactionSerializer


# Create your views here.


class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()
