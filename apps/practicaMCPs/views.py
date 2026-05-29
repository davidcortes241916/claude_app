from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .tool import run_tool
import json

# Create your views here.

@csrf_exempt
def mcp_endpoint(request):
    try:
        body = json.loads(request.body)
        resultado = run_tool(body["tool"], body.get("arguments", {}))
        return JsonResponse({"resultado": resultado})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

"""
Invoke-RestMethod -Uri "http://127.0.0.1:8000/practicaMCPs/email_mcp/" `
>> -Method POST `
>> -ContentType "application/json" `
>> -Body '{"tool":"send_email","arguments":{"from":"davidalejandro241916@gmail.com","to":"alexis241916@gmail.com","subject":"Prueba MCP","message":"Hola, este es un correo enviado desde MCP en Django"}}'
"""