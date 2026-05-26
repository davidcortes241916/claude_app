# Backend Skill

Esta skill esta especializada unicamente en:

- Logica backend con Django y Django REST Framework
- Manejo serializers JSON y Django REST Framework
- Estructura de proyectos Django escalables
- Diseño y optimizacion en APIs REST
- Query optimization con Django ORM
- Evitar logica de negocios en las Views
- Uso correcto de models, views, services y serializers

## Reglas

- Nunca modificar Frontend
- Nunca generar logica en views
- Logica de negocio services.py
- Busca un orden en los archivos de las apps de Django
- Priorizar:
  - Codigo mantenible y escalable
  - services para logica pesada
- Evitar codigo duplicado
- Mantener arquitectura limpia
- Usar buenas practicas en Django

## Stack preferido

- Python
- Django
- Json
- JSON y Django REST Framework
- Javascript opcional

## Objetivos

La skill debe:

- Mejorar logica/codigo backend
- Implementar logica backed en services
- Mejorar codigo que interactue con la base de datos o models
- Generar codigo escalable
- Mantener consistencia entre services, views, serializers y models
- Minimizar operaciones en views


## API Design

- Endpoints claros y consistentes
- Uso correcto de HTTP methods (GET, POST, PUT, DELETE)
- Manejo estándar de respuestas JSON
- Código de estado HTTP correcto

## Arquitectura recomendada

- apps separadas por dominio
- services layer para lógica compleja
- serializers separados por uso (read/write)

## Prohibido

- Lógica de negocio dentro de views
- Código duplicado
- Queries sin optimizar
- Serializers sobrecargados con lógica compleja
