# webIglesia — sitio público de AD Quilpué (adquilpue.cl)

Sitio estático (HTML + CSS + un `app.js` pequeño, sin compilación) de la Asamblea de Dios Quilpué: quiénes somos, horarios y contacto.
El enlace «Acceso interno» lleva al sistema Jetro de la iglesia (`adquilpue.jetro.cl`).

## Revisar en local
`./run.sh` → http://localhost:8005

## Publicación
Cloudflare Pages conectado a este repo (sin comando de build, carpeta de salida `/`): cada push a `main` se publica.
Las cabeceras de seguridad están en `_headers`.

## Mantener al día
- Los horarios están escritos a mano en `index.html`: deben coincidir con el horario semanal configurado en el sistema.
- «Acceso interno» apunta a `https://adquilpue.jetro.cl` en todas las ramas.

## Ramas y trabajo en equipo
| Rama | Para qué | Quién |
|---|---|---|
| `main` | Lo publicado en adquilpue.cl (cada push se publica) | Solo Bernabé, desde `dev` |
| `dev` | Integración: aquí se junta y se revisa todo antes de publicar | Merge de las ramas de trabajo |
| `ministerio/NOMBRE` | Trabajo en la página de un ministerio (p. ej. `ministerio/jovenes`) | Quien arma esa página |

Flujo:
1. Partir de `dev` actualizado: `git checkout dev && git pull`, luego `git checkout -b ministerio/NOMBRE`
   (o `git checkout ministerio/jovenes` si ya existe).
2. Trabajar solo dentro de `ministerios/NOMBRE/`. Si hace falta cambiar algo común (`styles.css`,
   `ministerios/ministerio.css`, `app.js`, `index.html`), avisarlo en el pull request: afecta a todas las páginas.
3. Commits pequeños y `git push`. Abrir un **pull request hacia `dev`** en GitHub; Bernabé lo revisa y lo junta.
4. Para traer lo nuevo de `dev` a la rama: `git merge dev`.
5. Publicar: Bernabé pasa `dev` a `main` (`git checkout main && git merge dev && git push`).

Cloudflare Pages publica una vista previa por rama si las vistas previas están activas en el proyecto
(`https://RAMA.PROYECTO.pages.dev`, con `/` cambiado por `-`): sirve para mostrar el avance sin tocar el sitio real.

## Páginas de ministerio
En `ministerios/`: cada ministerio tiene su carpeta con su página, sus colores y sus fotos, sobre el mismo diseño del
sitio. Cómo funciona y cómo crear una nueva: [`ministerios/README.md`](ministerios/README.md). Jóvenes es la plantilla.

## Diseño (rama `dev`, 2026-09-24)
Tradicional y sobrio, con la paleta del templo (`templo.jpg`): bordó de las sillas y el altar (`#7d1a28`), dorado de la
madera del púlpito (`#e3bd62` / `#a87a26`) y marfil de los muros. Títulos en EB Garamond, texto en Source Sans 3.
Motivo: el arco ojival de los paneles y el púlpito (marco de la foto, logo). Pensado para quien visita por primera vez:
horarios y dirección visibles de entrada, «Qué esperar en tu primera visita», ministerios, en vivo, oración y mapa.
`app.js`: menú en celular, «próxima reunión» en la franja superior, el día de hoy destacado (su lista de reuniones debe
coincidir con la sección Horarios) y el visor de fotos de las galerías. Sin JavaScript la página funciona igual.
Los colores se usan por función (`--accent`, `--highlight`…, definidos en `styles.css`), no por nombre: así una página
de ministerio cambia su paleta redefiniendo solo esas variables.

## Pendiente
- Más fotos (fachada, congregación, actividades) y foto del pastor.
- «Lo que creemos» resume en palabras propias las 16 verdades fundamentales de las Asambleas de Dios
  (texto oficial: https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths); conviene que el pastor lo revise.
- Correo `adquilpue@gmail.com` es temporal: actualizarlo aquí cuando cambie.
