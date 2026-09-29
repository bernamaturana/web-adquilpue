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
| `main` | **Producción**: lo publicado en adquilpue.cl (cada push se publica) | Solo Bernabé, desde `pruebas` |
| `pruebas` | **Pre-producción**: lo que se va a publicar, para revisarlo antes. Hoy es copia de `main` | Solo Bernabé, desde `dev` |
| `dev` | **Integración**: junta lo que se trabaja en paralelo | Merge de las ramas de trabajo (pull request) |
| `ministerio/NOMBRE`, etc. | **Ramas de trabajo** (p. ej. `ministerio/jovenes`) | Quien hace ese trabajo |

```
ramas de trabajo  →  dev  →  pruebas  →  main
```

Flujo:
1. Partir de `dev` actualizado: `git checkout dev && git pull`, luego `git checkout -b ministerio/NOMBRE`
   (o `git checkout ministerio/jovenes` si ya existe).
2. Trabajar solo dentro de `ministerios/NOMBRE/`. Si hace falta cambiar algo común (`styles.css`,
   `ministerios/ministerio.css`, `app.js`, `index.html`), avisarlo en el pull request: afecta a todas las páginas.
3. Commits pequeños y `git push`. Abrir un **pull request hacia `dev`** en GitHub; Bernabé lo revisa y lo junta.
4. Para traer lo nuevo de `dev` a la rama: `git merge dev`.
5. Preparar una publicación: Bernabé pasa `dev` a `pruebas` (`git checkout pruebas && git merge dev && git push`)
   y se revisa ahí (computador y celular).
6. Publicar: pasar `pruebas` a `main` (`git checkout main && git merge pruebas && git push`).
   `main` solo recibe desde `pruebas`; si algo falla en `pruebas`, se corrige en `dev` y se vuelve a pasar.

**Dónde se ve cada rama:** `main` se publica en adquilpue.cl. `pruebas` es **solo local** (`git checkout pruebas && ./run.sh`):
está excluida de las vistas previas de Cloudflare Pages (Settings → Builds → Branch control). `dev` y las ramas de
trabajo también se revisan en local.

**Reglas en GitHub** (repositorio público desde el 28/9; Settings → Rules):

| Rama | Regla |
|---|---|
| `main`, `pruebas` | No se borran ni se reescriben. Solo cambian por **pull request** de Bernabé (`dev → pruebas`, `pruebas → main`), con el check «Rama de destino» en verde |
| `dev` | No se borra ni se reescribe. Los demás entran por **pull request aprobado por Bernabé** (`CODEOWNERS`), con el check en verde y las conversaciones resueltas. Bernabé puede hacer push directo |
| Ramas de trabajo | Libres para quien trabaja en ellas |

- Los pull request se juntan con **merge commit** (squash y rebase están desactivados), para que `dev`, `pruebas` y `main`
  sigan siendo la misma historia.
- Cada pull request trae la lista de revisión de `.github/pull_request_template.md`; el check es `.github/workflows/ramas.yml`.
- Las ramas de trabajo no se borran al juntarlas: se reutilizan (`git merge dev` para ponerlas al día).
- **Repositorio público:** cualquiera puede verlo, no modificarlo. Las fotos de personas se suben solo con permiso
  (de sus padres si son menores): lo que se sube queda en el historial aunque después se borre.

## Páginas de ministerio
En `ministerios/`: cada ministerio tiene su carpeta con su página, sus colores y sus fotos, sobre el mismo diseño del
sitio. Hay páginas para Jóvenes (`edcquilpue`), Escuela dominical, Alabanza, Damas y Varones, con el contenido por completar. Cómo funcionan y cómo crear una nueva: [`ministerios/README.md`](ministerios/README.md).

## Pedido de oración
Formulario en la sección Contacto de la portada: arma un mensaje de WhatsApp al +56 9 4442 0180 con el nombre (opcional), la petición y si quiere que lo contacten. No se guarda nada en el sitio; por eso `_headers` permite `form-action https://wa.me`. Sin JavaScript envía solo la petición.

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
