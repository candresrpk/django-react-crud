from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import TransactionViewSet

router = routers.DefaultRouter()
router.register(r'transactions', TransactionViewSet, 'transactions')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Transactions API', public=True)),
]
