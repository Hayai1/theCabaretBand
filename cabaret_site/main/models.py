
# Create your models here.

from django.db import models

class Tour(models.Model):
    date = models.DateField()
    venue = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    ticket_link = models.URLField()

    class Meta:
        ordering = ['date']  # Orders tours by date (earliest first)

    def __str__(self):
        return f"{self.venue} - {self.date}"