from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import Tour
from django.utils import timezone


def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Compose email
        subject = f'New Contact Form Submission from {name}'
        email_message = f"""
        Name: {name}
        Email: {email}
        
        Message:
        {message}
        """
        
        try:
            # Send email
            result = send_mail(
                subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            print(f"Email sent successfully! Result: {result}")
            messages.success(request, 'Thank you for your message! We will get back to you soon.')
        except Exception as e:
            print(f"Email error: {str(e)}")
            messages.error(request, f'Sorry, there was an error sending your message.')
        
        return redirect('main:index')
    
    # Get all upcoming tours
    tours = Tour.objects.filter(date__gte=timezone.now().date())
    
    return render(request, 'main/index.html', {'tours': tours})