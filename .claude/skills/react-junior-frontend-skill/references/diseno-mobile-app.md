# Sistema de Diseño Móvil (Mobile UI/UX)

Este documento define las reglas de interfaz, usabilidad y layouts exclusivos para la experiencia móvil. Claude debe priorizar estas pautas cuando trabaje en pantallas o componentes mobile.

---

## 1. Ergonomía y Zonas Táctiles (Touch Targets)
Para garantizar que la app sea fácil de usar con una sola mano:

*   **Tamaño Mínimo de Botones:** Cualquier elemento interactivo (botones, iconos con enlace, inputs) debe tener un área táctil mínima de **44x44px** (o `h-11 w-11` en Tailwind) para evitar clics accidentales.
*   **Zonas de Alcance (Thumb Zone):** Las acciones principales (botones de "Continuar", "Guardar", "Comprar") deben ubicarse en la mitad inferior de la pantalla. Evita poner botones importantes en la esquina superior izquierda.
*   **Inputs de Formulario:** Deben ocupar todo el ancho disponible y tener una altura cómoda (mínimo `h-12` o 48px) para que sea fácil escribir en ellos.

---

## 2. Layouts y Estructura de Pantalla (Mobile Grid)
Las pantallas móviles se estructuran verticalmente:

*   **Márgenes Laterales:** El contenedor principal de cada pantalla debe llevar un padding fijo a los lados de **16px** (`px-4`) o **24px** (`px-6`) máximo. Nunca dejes el texto pegado al borde físico del celular.
*   **Separación Vertical (Spacing):** Usa saltos de espacio consistentes para separar bloques de contenido:
    *   `gap-2` (8px) para elementos muy juntos como imagenes o nombres.
    *   `gap-4` (16px) para separar inputs o elementos de una lista.
    *   `gap-6` (24px) para separar secciones grandes.
*   **Estructura Base:**
    *   **Header:** Fijo arriba (`top-0`), altura de 56px
    *   **Contenido:** Siempre envuelto en un componente de Scroll (`ScrollView` o `overflow-y-auto`) para que la pantalla sea deslizable si el contenido es largo.
    *   **Bottom Navigation / Tab Bar:** Barra fija abajo si la app tiene pestañas principales (Inicio, Buscar, Perfil). Altura de 64px.

---

## 3. Tipografía Móvil (Escala Reducida)
En móviles los textos deben ser un poco más pequeños que en escritorio para que quepa la información:

*   **Títulos de Pantalla (Headers):** Tamaño `text-2xl` (24px), peso `font-bold`.
*   **Subtítulos / Títulos de Tarjetas:** Tamaño `text-lg` (18px) o `text-base` (16px), peso `font-semibold`.
*   **Texto Base (Cuerpo y Párrafos):** Tamaño `text-sm` (14px) para optimizar el espacio, peso `font-normal`.
*   **Textos Secundarios / Leyendas:** Tamaño `text-xs` (12px).

---

## 4. Patrones de UI y Feedback Visual
*   **Listas (Lists / Cards):** Las tarjetas en móvil deben ocupar el 100% del ancho del contenedor (restando los márgenes laterales). Evita diseños de múltiples columnas a menos que sean fotos en formato cuadrícula (máximo 2 columnas).
*   **Estados de Carga (Loading):** Al realizar una acción, muestra un spinner o una barra de carga inmediatamente para que el usuario sepa que la app está procesando la solicitud.
*   **Teclado:** Asegúrate de que los formularios no queden tapados por el teclado virtual del teléfono (en React Native, usar `KeyboardAvoidingView`).