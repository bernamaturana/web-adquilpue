# Páginas de ministerio

Cada ministerio puede tener su propia página en `/ministerios/NOMBRE/`, con galería, redes, actividades y líderes.
Todas comparten el **mismo lenguaje visual** del sitio y cada una tiene **sus propios colores**.

La página de **Jóvenes** (`edcquilpue/`) es la plantilla de referencia: para un ministerio nuevo, se copia y se adapta.

## Cómo está armada

| Archivo | Qué tiene | ¿Se toca por ministerio? |
|---|---|---|
| `/styles.css` | Diseño del sitio: tipografía, botones, secciones, encabezado, pie | No |
| `/ministerios/ministerio.css` | Piezas de las páginas de ministerio: portada, tarjetas, galería, visor de fotos, líderes | No (salvo una pieza nueva para todos) |
| `NOMBRE/tema.css` | **Solo los colores** del ministerio | Sí |
| `NOMBRE/index.html` | El contenido | Sí |
| `NOMBRE/fotos/` | Las fotos | Sí |
| `/app.js` | Menú en celular, próxima reunión y visor de la galería | No |

### Lo que se mantiene igual en todos (el «lenguaje visual»)
- Tipografías: títulos en **EB Garamond** (serif, con una palabra en *cursiva* de color), texto en **Source Sans 3**.
- El **arco ojival** del templo como marco de la foto de portada y de las fotos de personas.
- El **antetítulo** en mayúsculas espaciadas con una línea a la izquierda, y el **ornamento** (cruz entre dos líneas) bajo cada título.
- Tarjetas con filete fino y borde superior de color; fondo marfil; secciones alternadas claro / tinte.
- El encabezado y el pie son los de la iglesia (el logo conserva el bordó y dorado).

### Lo que cambia: los colores (`tema.css`)
Solo se redefinen seis colores con función:

| Variable | Uso | Jóvenes |
|---|---|---|
| `--accent` | Color principal: títulos destacados, botones, bordes | índigo `#2b3990` |
| `--accent-deep` | Hover de botones, franja superior | `#1c2566` |
| `--on-accent` | Texto sobre el color principal | `#eef0ff` |
| `--highlight` | Segundo color sobre fondo claro: antetítulos | naranja `#b4461f` |
| `--highlight-light` | Segundo color sobre fondo oscuro, ornamentos | `#ff9f5a` |
| `--highlight-hover` | Hover del botón del segundo color | `#ffb57f` |

**Contraste:** el texto normal debe tener al menos 4.5:1 sobre el marfil `#faf7f1` (`--accent` y `--highlight`), y
`--highlight-light` sobre `--accent-deep`. Se puede revisar en https://webaim.org/resources/contrastchecker/.
No usar colores fijos en el HTML ni en `ministerio.css`: siempre las variables.

## Crear la página de otro ministerio
1. Copiar la carpeta `edcquilpue/` con el nombre nuevo, en minúsculas y sin tildes (`damas/`, `escuela-dominical/`).
2. Cambiar los colores en `tema.css` y el `theme-color` del `<head>`.
3. Reemplazar el contenido del `index.html`: título, descripción, versículo, datos, secciones. Lo marcado con
   `<mark class="tbd">` es contenido pendiente (se ve amarillo a propósito): reemplazarlo o **quitar la sección**.
4. Redes: dejar solo las que existan.
5. En la portada del sitio (`/index.html`, sección Ministerios), convertir la tarjeta en enlace como la de Jóvenes
   (`class="ministry has-page"`, enlace en el `<h3>` y «Conoce más →»), y agregarlo en «Otros ministerios» de las demás páginas.

## Fotos
- Van en `NOMBRE/fotos/`, en **JPG**, con nombre sin espacios ni tildes (`campamento-2026-1.jpg`).
- Dos tamaños por foto de galería: la grande (**1600 px** de lado mayor, idealmente < 400 KB) y la miniatura
  cuadrada `-mini.jpg` (**600 × 600**, < 100 KB). En Mac: Vista Previa → Herramientas → Ajustar tamaño; o https://squoosh.app.
- Portada: vertical 4:5 (**1080 × 1350**). Personas: 4:5, pequeña (400 × 500).
- Cada `<img>` lleva `alt` con lo que se ve («Jóvenes cantando en el campamento de verano»): lo leen los lectores de
  pantalla y aparece como pie en el visor.
- **Permiso:** publicar solo fotos con permiso de quienes aparecen; con menores de edad, con permiso de sus padres.

## Probar
`./run.sh` en la raíz del repositorio y abrir http://localhost:8005/ministerios/edcquilpue/.
Revisar en celular (o con el modo responsive del navegador) y sin JavaScript (la página debe verse y funcionar igual).
