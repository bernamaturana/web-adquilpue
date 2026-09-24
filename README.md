# webIglesia — sitio público de AD Quilpué (adquilpue.cl)

Sitio estático (HTML + CSS, sin compilación) de la Asamblea de Dios Quilpué: quiénes somos, horarios y contacto.
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
