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

## Cómo validar

1. **Validación W3C:** subir `index.html` (o pegar el código) en <https://validator.w3.org/>
   y guardar una captura del resultado sin errores.
2. **Accesibilidad WAVE:** abrir la página publicada (por ejemplo con GitHub Pages) o el
   archivo local en el navegador, correr la extensión [WAVE](https://wave.webaim.org/extension/)
   y verificar que se detecten los landmarks `banner`, `navigation` (x2), `main`, `complementary`
   y `contentinfo`, y que el formulario no reporte errores de etiquetas.
3. **Capturas de viewport:** usar las herramientas de desarrollador del navegador (modo
   responsivo) para capturar la página en tres anchos, por ejemplo 375px (móvil),
   820px (tablet) y 1440px (escritorio).

## Cómo publicar (GitHub Pages, opcional)

```bash
git init
git add .
git commit -m "Portafolio personal: HTML5 semántico + CSS Flexbox"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/portafolio-personal.git
git push -u origin main
```

Luego, en **Settings → Pages**, seleccionar la rama `main` para obtener una URL pública.
