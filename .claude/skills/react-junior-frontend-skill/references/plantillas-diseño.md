# Guía de Referencia: Estructura, Diseño y Componentes

Este documento contiene las plantillas de diseño que sirven como **REFERENCIA OBLIGATORIA** para la estructura, diseño visual, animaciones y comportamiento responsivo del proyecto. 

---

## Reglas Generales de Implementación

Al desarrollar o modificar componentes basados en este documento, debes seguir estas directrices estrictas:

* **Prohibido el Copiado Literal:** No copies directamente el código ni la identidad visual exacta de las referencias. Úsalas exclusivamente como guía de arquitectura, flujo y calidad estética.
* **Enfoque en React:** Toda solución debe ser implementada utilizando componentes de React, siguiendo buenas prácticas (hooks adecuados, modularidad y componentización).
* **Diseño Mobile-First & Responsivo:** Si una referencia no cuenta con una adaptación móvil óptima, es obligatorio diseñar e implementar el comportamiento responsive.
* **Código Limpio y Semántico:** Usa etiquetas HTML5 semánticas y mantén un estándar profesional.

---

## Componentes de Referencia

### 1. Navbar (Navegación)
* **Referencia Visual:** [Navbar](https://codepen.io/themrsami/pen/YPzvmyY)
* **Reglas de Aplicación:**
    * Toma como referencia únicamente el elemento `<header>` y su contenido. Ignora el resto del layout de la plantilla.
    * Replica la fluidez de las animaciones, la arquitectura de navegación y la transición entre web y mobile.
    * Crea una versión propia y estilizada en React sin clonar la identidad gráfica de la referencia.

### 2. Scroll (Efectos e Indicadores)
* **Referencia Visual:** [Scroll](https://codepen.io/nxworld/pen/OyRrGy)
* **Reglas de Aplicación:**
    * Analiza los diferentes ejemplos de la referencia; puedes seleccionar y adaptar el que mejor encaje con la experiencia de usuario del proyecto.
    * Asegura una transición e integración fluida dentro del ciclo de vida de React.
    * Garantiza que el comportamiento visual funcione correctamente en pantallas táctiles y dispositivos móviles.

### 3. Layout y Estructura General
* **Referencia Visual:** [Integracion estructura (Sitio Web)](https://integratedbio.com/)
* **Reglas de Aplicación:**
    * Utiliza este sitio como estándar para el layout general: orden de secciones, jerarquía visual, espaciados (padding/margin) y animaciones base al hacer scroll.
    * Extrae la lógica de una "buena estructura de sitio web" para aplicarla a la distribución de nuestra aplicación.

### 4. Cards (Tarjetas de Contenido)
* **Referencia Visual:** [Cards](https://codepen.io/z-/pen/OBPJKK)
* **Reglas de Aplicación:**
    * Adopta el enfoque minimalista, limpio y profesional que maneja la plantilla.
    * Toma como guía la estructura de la información, el diseño de contenedores y las microinteracciones/animaciones (hovers, transiciones).
    * Adapta el tamaño y la distribución en rejilla (Grid/Flexbox) para que sea completamente responsivo.

### 5. Footer (Pie de Página)
* **Referencia Visual:** [Footer](https://codepen.io/baahubali92/pen/KbRBxJ)
* **Reglas de Aplicación:**
    * Usa obligatoriamente la etiqueta semántica `<footer>`.
    * Replica la distribución de columnas, enlaces y la arquitectura de la información de la referencia.
    * Implementa las animaciones de los elementos (como enlaces o iconos sociales) adaptándolas al entorno de React.