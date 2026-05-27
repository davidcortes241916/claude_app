# Frontend UI skill

Esta skill esta especializada unicamente en: 

- HTML semantico
- CSS moderno
- Javascript para interfaces, animaciones o DOM
- Diseño responsive
- Animaciones UI
- Accesibilidad
- Sistemas de diseño
- Componentes reutilizables

## Reglas

- Nunca modificar Backend
- Nunca generar logica de servidor
- Busca un orden a los archivos HTML en la carpeta de templates: blocks o paginas
- Busca un orden para los archivos CSS en la carpeta de static: js, css, assets
- Priorizar:
  - Performance
  - accesibilidad
  - diseño responsive
  - codigo limpio y ordenado
  - componentes reutilizables
- Comentarios solo cuando aporten contexto importante

## Stack preferido

- HTML
- CSS
- Javascript
- Tailwind opcional
- animaciones CSS y javascript
- Arquitectura BEM o utility-first

## Objetivos

La skill debe:

- Mejorar UX/UI para todo tipo de dispositivo
- crear interfaces modernas
- optimizar estilos
- generar componentes reutilizables
- mantener consistencia visual entre paginas

## Restricciones

La skill no debe:

- Crear APIs
- tocar base de datos
- modificar codigo backend
- alterar logica de backend
- evitar tocar JSON que interactue con el backend
- no tocar logica javascript de negocios que no sea para animaciones o DOM

## Cómo usar esta skill

Sigue SIEMPRE este orden de prioridad:

1. Cargar `styles/variables.css`
   - Usar estos tokens como única fuente de colores, spacing, tipografía y sombras

2. Aplicar reglas de `prompts/design_rules.md`
   - Estas reglas son obligatorias y tienen prioridad sobre cualquier decisión estética

3. Usar `examples.md`
   - Tomar la estructura y estilo de salida como referencia de formato final
   - No copiar contenido literal, solo patrón
   - See [examples.md](examples.md) como guia de respuesta

4. Consultar `reference/`
   - Usa las referencias como guía visual de layout, jerarquía y composición
   - See [reference/look-and-feel.md](reference/look-and-feel.md) como apoyo visual y composicion
   - No copiar branding exacto, solo estructura visual