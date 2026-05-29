# Sistema de Diseño e Identidad Visual

Este documento contiene las reglas visuales y de estilo de la aplicación. Claude debe respetar estas pautas al generar cualquier componente, layout o vista.

---

## 1. Paleta de Colores
Utilizamos una estética moderna basada en [Modo Oscuro / Modo Claro - *Elige el tuyo*]. Aquí están los códigos exactos:

*   **Colores Principales:**
    *   `Primary (Marca):` `#1E40AF` (Azul corporativo) -> En Tailwind: `blue-800`
    *   `Secondary:` `#6366F1` (Índigo para acentos) -> En Tailwind: `indigo-500`
*   **Fondos (Backgrounds):**
    *   `Main Background:` `#0F172A` (Gris pizarra oscuro) -> En Tailwind: `slate-900`
    *   `Card/Surface Background:` `#1E293B` (Para tarjetas y contenedores) -> En Tailwind: `slate-800`
*   **Textos:**
    *   `Text Primary (Títulos):` `#F8FAFC` (Blanco brillante) -> En Tailwind: `slate-50`
    *   `Text Secondary (Párrafos):` `#94A3B8` (Gris suave) -> En Tailwind: `slate-400`
*   **Estados:**
    *   `Success:` `#22C55E` (Verde) | `Error:` `#EF4444` (Rojo) | `Warning:` `#EAB308` (Amarillo)

---

## 2. Tipografía y Textos
La fuente principal de la aplicación es **Inter, Roboto, o Geist**

*   **Títulos Principales (H1):** Tamaño `text-3xl` o `text-4xl`, peso `font-bold` (negrita).
*   **Subtítulos (H2/H3):** Tamaño `text-xl`, peso `font-semibold`.
*   **Texto Base (Cuerpo):** Tamaño `text-base` o `text-sm`, peso `font-normal`.
*   **Notas/Captions:** Tamaño `text-xs`, color secundario.

---

## 3. Espaciados, Bordes y Sombras (Layout Rules)
Para que toda la app se vea simétrica y ordenada:

*   **Márgenes y Paddings:** Usa siempre la escala de Tailwind basada en múltiplos de 4px (ej: `p-4` para 16px, `p-6` para 24px). El padding estándar de una sección es `p-6`.
*   **Bordes Redondeados (Border Radius):**
    *   Botones y inputs pequeños: `rounded-md` o `rounded-lg` (8px).
    *   Tarjetas (Cards) y modales: `rounded-xl` o `rounded-2xl` (12px a 16px).
*   **Sombras (Shadows):** Las tarjetas sobre el fondo principal deben llevar una sombra sutil: `shadow-md` o `shadow-lg`.

---

## 4. Componentes Comunes (Estilo)
Reglas rápidas para elementos repetitivos:

*   **Botón Primario:** Fondo `bg-blue-800`, texto blanco, bordes redondeados, y un efecto hover suave: `hover:bg-blue-700 transition-colors`.
*   **Inputs de Formulario:** Fondo oscuro `bg-slate-900`, borde gris fino `border-slate-700`, texto blanco. Al hacer foco, el borde cambia a azul: `focus:border-blue-500 focus:ring-1 focus:ring-blue-500`.