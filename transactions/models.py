from django.db import models

# Create your models here.


class Transaction(models.Model):

    choices = (
        ('expense', 'expense'),
        ('income', 'income')
    )

    title = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=100, choices=choices)

    def __str__(self):
        return f'{self.title} - {self.amount}  - {self.category} '
