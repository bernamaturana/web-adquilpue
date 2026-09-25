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
- **Ramas:** `main` es lo publicado; `dev` es para probar. «Acceso interno» apunta a `https://adquilpue.jetro.cl` en
  `main` y a la instancia local `https://adquilpue.jetro.cl` en `dev`. Se trabaja en `dev` y se pasa con
  `git checkout main && git merge dev`: el enlace de `main` se conserva mientras no se edite esa línea en `dev`.
  No traer `main` a `dev`.

## Diseño (rama `dev`, 2026-09-24)
Tradicional y sobrio, con la paleta del templo (`templo.jpg`): bordó de las sillas y el altar (`#7d1a28`), dorado de la
madera del púlpito (`#e3bd62` / `#a87a26`) y marfil de los muros. Títulos en EB Garamond, texto en Source Sans 3.
Motivo: el arco ojival de los paneles y el púlpito (marco de la foto, logo). Pensado para quien visita por primera vez:
horarios y dirección visibles de entrada, «Qué esperar en tu primera visita», ministerios, en vivo, oración y mapa.
`app.js`: menú en celular, «próxima reunión» en la franja superior y el día de hoy destacado (su lista de reuniones debe
coincidir con la sección Horarios). Sin JavaScript la página funciona igual.

## Pendiente
- Más fotos (fachada, congregación, actividades) y foto del pastor.
- «Lo que creemos» resume en palabras propias las 16 verdades fundamentales de las Asambleas de Dios
  (texto oficial: https://ag.org/es-ES/beliefs/Statement-of-Fundamental-Truths); conviene que el pastor lo revise.
- Correo `adquilpue@gmail.com` es temporal: actualizarlo aquí cuando cambie.
