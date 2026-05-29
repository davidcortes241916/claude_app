from django.shortcuts import render
from .services import ApiPresidents, ApiComida
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
def home(request):
    return render(request, "base.html")

def presidentes(request):
    return render(request, "paginas/api_presidente.html")

def comida(request):
    return render(request, "paginas/api_comida.html")

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

@api_view(['GET'])
def comida_api(request):
    api = ApiComida()
    
    catalogo= request.GET.get("catalogo")
    
    if catalogo:
        comidas = api.get_categories_by_filter(catalogo)
    else:
        comidas = api.get_categories()

    return Response({
        'comidas': comidas
    })