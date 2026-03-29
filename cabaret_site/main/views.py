from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Handle form data (send email, save to DB, etc.)
            messages.success(request, 'Thank you for your message!')
            return redirect('main:index')
    else:
        form = ContactForm()
    
    return render(request, 'main/index.html', {'form': form})