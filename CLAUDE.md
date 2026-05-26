# Aplicación de Peticiones (Tickets) con Django

## estilo de codigo

- Python 3.14
- Uso de `services.py` para manejar lógica general y reglas de negocio
- Uso de `serializers.py` para manejo y transformación de datos de tickets y peticiones
- Evitar lógica de negocio en templates
- Uso de JSON para integración con REST APIs
- JavaScript únicamente para funciones básicas del DOM
- Uso de Django Templates y archivos static nativos de Django
- `models.py` debe mantenerse claro y sin lógica pesada
- Evitar duplicación de lógica:
  - backend → `services.py`
  - frontend → funciones reutilizables en JavaScript
- Comentarios solo cuando aporten contexto importante
- Mantener funciones pequeñas y simples:
  - máximo recomendado: 30 líneas
- Vistas simples y pequeñas
- Formularios usando Django Forms
- Variables y funciones en `snake_case`
- Clases en `PascalCase`
- Mantener separación clara entre:
  - vistas
  - servicios
  - formularios
  - serializers
  - templates

---

## comandos

### activar entorno virtual
source venv\Scripts\activate.bat

### iniciar servidor
python manage.py runserver

### crear migraciones
python manage.py makemigrations

### aplicar migraciones
python manage.py migrate

### ejecutar tests
python manage.py test

---

## arquitectura

- Arquitectura basada en apps Django
- Cada app tiene una única responsabilidad
- Estructura simple, ordenada y entendible
- Base de datos local de prueba: `db.sqlite3`
- Templates usando Django Templates
- CSS simple usando Bootstrap
- Separar lógica compleja de las vistas

### apps

#### core
Responsabilidades:
- Leer y mostrar tickets
- Historial de tickets
- Ordenamiento y filtros
- Dashboard principal

#### ticket
Responsabilidades:
- Crear tickets
- Validar datos del ticket
- Manejo de formularios de creación
- Editar o eliminar tickets

---

## convenciones

### ticket

Un ticket debe contener:

- titulo
- descripcion
- estado
- prioridad
- fecha_creacion
- usuario_creador

### estados permitidos

- abierto
- en_proceso
- cerrado

### prioridades permitidas

- baja
- media
- alta

---

## reglas de desarrollo

- No colocar consultas complejas directamente en views
- Toda lógica reutilizable debe ir en `services.py`
- Evitar JavaScript innecesario
- Reutilizar templates parciales cuando sea posible
- Mantener nombres claros y descriptivos
- Validaciones importantes deben existir:
  - frontend
  - backend
- Mantener separación entre:
  - lógica
  - presentación
  - datos
- Evitar:
  - ls
  - grep
  - cat
  - rm
  - mv
  - cp

---

## objetivo del proyecto

Desarrollar una aplicación sencilla de tickets usando Django, enfocada en:

- simplicidad
- mantenibilidad
- claridad del código
- separación de responsabilidades
- facilidad de escalabilidad futura

# Entorno

Sistema operativo: windows
shell: powershell, cmd

todos los comandos deben ser compatibles con powershell/cmd