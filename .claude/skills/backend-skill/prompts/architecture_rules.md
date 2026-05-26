# Architecture rules

## Rules
- Evitar lógica duplicada
- Evitar lógica de negocio en views y serializers
- Implementar buenas prácticas de Django
- Services se encarga de lógica pesada, reglas de negocio y acceso a base de datos
- Mantener separación clara entre capas (views, services, repositories, serializers)
- Comentarios solo cuando aporten contexto importante

## Django practices

- Separar responsabilidades en las APIs
- Usar Django ORM correctamente
- Mantener serializers simples (solo validación y transformación de datos)
- Organizar el proyecto por apps funcionales (no por tipo de archivo global)
- Usar managers o services para queries complejas

## API design rules

- Endpoints consistentes y predecibles
- Usar correctamente métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- Respuestas JSON estandarizadas
- Usar status codes HTTP correctos
- Validación estricta de entrada de datos en serializers

## Code quality

- Código limpio y legible
- Evitar funciones demasiado largas
- Mantener funciones pequeñas y reutilizables
- Usar nombres claros para variables, funciones y clases
- No hardcodear valores críticos