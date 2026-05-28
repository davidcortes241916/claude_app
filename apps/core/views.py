import os
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "base.html")

def claude_chat(request):
    index_path = os.path.join(settings.BASE_DIR, 'static', 'dist', 'index.html')
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as f:
            return HttpResponse(f.read())
    else:
        return HttpResponse(
            "<div style='font-family: sans-serif; max-width: 500px; margin: 50px auto; padding: 30px; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>"
            "<h2 style='color: #d97706;'>Claude Chat Simulator</h2>"
            "<p style='color: #4b5563; line-height: 1.6;'>El frontend de React no ha sido compilado aún para Django.</p>"
            "<p style='color: #4b5563; line-height: 1.6;'>Para verlo integrado en Django, ejecuta la compilación en la carpeta <code>frontend/</code>:</p>"
            "<pre style='background: #f3f4f6; padding: 12px; border-radius: 6px; overflow-x: auto;'>npm run build</pre>"
            "<p style='color: #4b5563; line-height: 1.6;'>O bien, inicia el servidor de desarrollo de Vite y accede directamente:</p>"
            "<pre style='background: #f3f4f6; padding: 12px; border-radius: 6px; overflow-x: auto;'>npm run dev</pre>"
            "<a href='http://localhost:5173' style='display: inline-block; background: #d97706; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 10px;'>Acceder a Vite (http://localhost:5173)</a>"
            "</div>",
            status=200
        )