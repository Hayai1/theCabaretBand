from django.contrib import admin
from .models import Tour

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ('date', 'venue', 'city', 'country', 'ticket_link')
    list_filter = ('country', 'date')
    search_fields = ('venue', 'city', 'country')
    date_hierarchy = 'date'