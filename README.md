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
- **Temporal:** «Acceso interno» apunta a `https://adquilpue.jetro.cl` (Tailscale). Al publicar el sistema, cambiarlo a
  `https://adquilpue.jetro.cl`.

## Diseño (rama `dev`, 2026-09-24)
Tradicional y sobrio, con la paleta del templo (`templo.jpg`): bordó de las sillas y el altar (`#7d1a28`), dorado de la
madera del púlpito (`#e3bd62` / `#a87a26`) y marfil de los muros. Títulos en EB Garamond, texto en Source Sans 3.
Motivo: el arco ojival de los paneles y el púlpito (marco de la foto, logo). Pensado para quien visita por primera vez:
horarios y dirección visibles de entrada, «Qué esperar en tu primera visita», ministerios, en vivo, oración y mapa.
`app.js`: menú en celular, «próxima reunión» en la franja superior y el día de hoy destacado (su lista de reuniones debe
coincidir con la sección Horarios). Sin JavaScript la página funciona igual.

## Por completar (marcado en amarillo en la página: buscar `class="tbd"` y `data-tbd`)
- Estacionamiento, duración del culto, espacio para niños durante el culto.
- Año de fundación e historia breve; nombre del pastor y su esposa (y foto, si hay).
- Confirmar con el pastor la lista «Lo que creemos».
- Qué culto se transmite y enlaces de YouTube, Facebook e Instagram.
- WhatsApp y correo de la iglesia (el botón de oración usará `https://wa.me/569XXXXXXXX?text=...`).
- Referencias para llegar y locomoción colectiva.
- Más fotos (fachada, congregación, actividades) para reemplazar o acompañar `templo.jpg`.
