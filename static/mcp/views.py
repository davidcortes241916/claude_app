import json
import requests
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
from .tools import run_tool


@csrf_exempt
def mcp_endpoint(request):
    try:
        body = json.loads(request.body)

        resultado = run_tool(
            body["tool"],
            body.get("arguments", {})
        )

        return JsonResponse({"resultado": resultado})

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def commits_view(request):
    response= requests.post(
        "http://localhost:8000/mcp/",
        json={
            "tool": "get_recent_commits",
            "arguments": {
                "owner": "davidcortes241916",
                "repo": "claude_app"
            }
        }
    )

    data= response.json()
    repo= data["resultado"][0]["repo"]

    return render(request, "mcp/commits.html", {"commits":data["resultado"], "repo":repo})