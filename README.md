# Portafolio personal — Miguel

Página de portafolio construida con **HTML5 semántico** y **CSS Flexbox**, sin frameworks externos.
Proyecto de la Actividad 1 (Laboratorio integrado) — Sesiones 2 y 4.

## Estructura del repositorio

```
├── index.html    # Estructura semántica (header, nav, main, section, article, aside, footer)
├── styles.css    # Estilos y layout responsivo con Flexbox
├── script.js     # Interacción mínima: menú de navegación en móvil
└── README.md
```

## Landmarks semánticos usados

| Elemento   | Rol ARIA implícito | Notas |
|------------|--------------------|-------|
| `<header>` | `banner`           | Logo + navegación principal |
| `<nav>` (x2) | `navigation`     | Diferenciados con `aria-label` distinto (principal / pie de página) |
| `<main>`   | `main`             | Uno solo por página |
| `<section>`| —                  | Cada una con `aria-labelledby` apuntando a su `<h2>` |
| `<article>`| `article`          | Tarjetas de proyecto, contenido autocontenido |
| `<aside>`  | `complementary`    | "Datos rápidos" en la sección Sobre mí |
| `<footer>` | `contentinfo`      | Copyright + navegación secundaria |

## Responsivo (Flexbox)

- **< 600px (móvil):** una sola columna en toda la página, menú de navegación colapsado tras un botón.
- **≥ 600px (tablet):** proyectos en 2 columnas (`flex-wrap`).
- **≥ 768px:** "Sobre mí" y "Contacto" pasan de columna a fila (`flex-direction: row`).
- **≥ 1024px (escritorio):** proyectos en 3 columnas, tal como pide la actividad.


