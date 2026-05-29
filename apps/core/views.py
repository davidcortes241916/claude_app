from django.shortcuts import render
from .services import ApiPresidents
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
def home(request):
    return render(request, "base.html")

def presidentes(request):
    return render(request, "paginas/api_presidente.html")

@api_view(['GET'])
def president_api(request):

    api = ApiPresidents()

    buscar = request.GET.get('buscar')

    if buscar:
        presidents = api.get_president_by_name(buscar)
    else:
        presidents = api.get_presidents()

    return Response({
        'presidents': presidents
    }) 
