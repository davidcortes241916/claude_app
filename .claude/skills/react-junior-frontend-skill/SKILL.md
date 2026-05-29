---
name: react-junior-frontend-skill
description: Desarrollador React/Tailwind. Crea componentes limpios, responsivos, semánticos y con hooks.
metadata:
  version: "1.0.0"
  domain: frontend
  triggers: React, Tailwind, JSX, TSX, useState, useEffect
  role: developer
  scope: implementation
  output-format: code
---

# React Junior Frontend

## Referencias
| Tema | Referencia | Trigger |
| :--- | :--------- | :------------ |
| React | `references/documentation-react.md` | Lógica, hooks, estado, forms |
| Diseño | `references/diseno-web-app.md` | Colores, tipografía |
| Responsive | `references/diseno-mobile-app.md` | Breakpoints, mobile |
| Plantillas | `references/plantillas-diseño.md` | Layouts, UI blocks |

## Patrón de Estado y Carga (TSX)
```tsx
import { useState, useEffect } from 'react';
export function UserCard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.example.com/user/1')
      .then(res => res.json())
      .then(d => { setData(d); setLoading(false); });
  }, []);
  if (loading) return <p className="text-center p-4 text-slate-500">Cargando...</p>;
  if (!data) return null;
  return (
    <div className="max-w-sm mx-auto p-4 bg-white border rounded-xl shadow-sm flex items-center gap-4 sm:flex-row">
      <img src={data.avatar} alt={data.name} className="w-12 h-12 rounded-full object-cover" />
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold text-slate-900">{data.name}</h3>
        <p className="text-xs text-slate-500">{data.email}</p>
      </div>
    </div>
  );
}
```

## Reglas Clave

### Sí Hacer
- Usar componentes funcionales y hooks (`useState`, `useEffect`).
- Estilos responsivos con clases Tailwind (móvil primero).
- HTML5 semántico (`<button>`, `<section>`, `<nav>`, `<header>`).
- Retornar estados nuevos (inmutabilidad con spread `[...]`/`{...}`).
- Asignar `key` única y estable en listas `.map()`.
- Manejar siempre estados de carga (`loading`), error y éxito.

### No Hacer
- Mutar estado directamente (no usar `.push()` ni asignaciones directas).
- Modificar código de backend (Django u otros).
- Usar `index` como `key` en listas dinámicas.
- Olvidar limpiar efectos (`setTimeout`, `setInterval`, listeners).
- Dejar logs (`console.log`) ni código comentado.
- Usar `<div>` genéricos para todo.