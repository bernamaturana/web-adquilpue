# Guía para trabajar una página de ministerio

Esta guía es para quien arma la página de su ministerio en el sitio de la iglesia (adquilpue.cl).
Partimos con **Jóvenes**: la página está en `ministerios/edcquilpue/` y se trabaja en la rama `ministerio/jovenes`.
Para otro ministerio es igual, cambiando la carpeta y la rama (ver la tabla en [`README.md`](README.md)).

No necesitas saber programar: la página ya está diseñada y solo hay que **reemplazar los textos amarillos** y
**agregar fotos**. Lo que hagas no se publica solo: Bernabé lo revisa antes de que salga en el sitio.

---

## 1. Lo que necesitas (una sola vez)

1. **Una cuenta de GitHub** (gratis, en https://github.com). Envíale tu nombre de usuario a Bernabé para que te dé acceso
   al repositorio `web-adquilpue`. Te llegará una invitación por correo: acéptala.
2. **GitHub Desktop** (https://desktop.github.com): para bajar el proyecto y enviar tus cambios sin usar comandos.
3. **Un editor de texto**: recomendamos **Visual Studio Code** (https://code.visualstudio.com).
4. **Python 3**, para ver la página en tu computador. En Mac ya viene; en Windows se instala desde
   https://www.python.org (marca «Add Python to PATH» al instalar).

## 2. Bajar el proyecto y elegir tu rama (una sola vez)

1. Abre GitHub Desktop e inicia sesión con tu cuenta.
2. *File → Clone repository* → busca `bernamaturana/web-adquilpue` → *Clone*.
3. Arriba, en **Current branch**, elige **`ministerio/jovenes`**. Trabaja siempre en esa rama: si estás en otra
   (por ejemplo `main` o `dev`), GitHub no te dejará enviar los cambios.
4. *Repository → Open in Visual Studio Code* para abrir los archivos.

## 3. Qué se edita

Trabaja **solo dentro de `ministerios/edcquilpue/`**:

| Archivo | Qué tiene |
|---|---|
| `index.html` | Todo el contenido de la página |
| `fotos/` | Las fotos (vacía por ahora) |
| `tema.css` | Los colores de Jóvenes (índigo y naranja). Normalmente no hace falta tocarlo |

En `index.html`, todo lo pendiente está marcado así: `<mark class="tbd">Texto</mark>` y se ve **amarillo** en la página.
Para completarlo, reemplaza la marca completa por el texto final. Por ejemplo:

```html
<p class="kicker"><mark class="tbd">Antetítulo</mark></p>   ← antes
<p class="kicker">Ministerio de jóvenes</p>                  ← después
```

Los enlaces pendientes tienen `href="#" data-tbd`: pon la dirección real y borra `data-tbd`.
Si una sección no se va a usar (por ejemplo, no hay redes sociales), **bórrala completa**, desde su `<section>` hasta
su `</section>`. Los comentarios `<!-- … -->` indican dónde empieza cada sección.

**No cambies** los archivos fuera de tu carpeta (`styles.css`, `app.js`, `index.html` de la raíz, `ministerio.css`):
afectan a todo el sitio. Si crees que hace falta, avísale a Bernabé.

## 4. Lo que hay que reunir para la página de Jóvenes

Conviene juntar esto antes de empezar (con el líder de Jóvenes):

- **Portada:** antetítulo, un versículo con su cita, una frase de presentación (1–2 líneas), tres datos cortos
  (por ejemplo «Sábados · 18:00», «Edades · 14 a 30», «Lugar · Templo»), los textos de dos botones y la foto de portada.
- **Nosotros:** quiénes son, qué hacen, un poco de historia y cómo integrarse; un recuadro con un dato destacado.
- **Actividades:** hasta tres, con nombre, descripción breve y día/hora.
- **Galería:** fotos de actividades (ver la sección 6).
- **Redes:** las redes reales del grupo (Instagram, etc.) con su usuario y enlace.
- **Líderes:** cargo y nombre, y su foto si quieren aparecer.
- **Invitación:** un texto final invitando a participar y dos botones (por ejemplo, WhatsApp e Instagram).

## 5. Ver la página en tu computador

1. En Visual Studio Code: *Terminal → New Terminal*.
2. Escribe `python3 -m http.server 8005` y Enter (en Windows puede ser `python -m http.server 8005`).
3. Abre en el navegador **http://localhost:8005/ministerios/edcquilpue/**. Al guardar un archivo, recarga la página.
4. Revisa cómo se ve en celular: en el navegador, clic derecho → *Inspeccionar* → ícono de celular.
5. Para detenerlo: `Ctrl + C` en la terminal.

## 6. Fotos

- En `ministerios/edcquilpue/fotos/`, en **JPG**, con nombres sin espacios ni tildes: `campamento-2026-1.jpg`.
- Galería: cada foto en dos tamaños: la grande (**1600 px** de lado mayor, idealmente bajo 400 KB) y una miniatura
  cuadrada con `-mini` al final (**600 × 600**, bajo 100 KB). Portada: vertical **1080 × 1350**. Personas: **400 × 500**.
  Para achicarlas: https://squoosh.app (o, en Mac, Vista Previa → Herramientas → Ajustar tamaño).
- Cada foto lleva una descripción en `alt` («Jóvenes cantando en el campamento de verano»).
- **Permiso:** sube solo fotos con permiso de quienes aparecen; si hay **menores de edad, con permiso de sus padres**.
  El repositorio es público y lo que se sube queda guardado en el historial aunque después se borre.

## 7. Guardar y enviar tus cambios

1. En GitHub Desktop verás la lista de archivos cambiados. Abajo a la izquierda escribe un resumen corto
   («Jóvenes: textos de portada») y presiona **Commit to ministerio/jovenes**.
2. Presiona **Push origin** para subirlos. Puedes hacer esto las veces que quieras: nada se publica todavía.
3. Cuando una parte esté lista para revisar: *Branch → Create Pull Request*. En GitHub:
   - **base: `dev`** ← **compare: `ministerio/jovenes`** (revisa que la base sea `dev`).
   - Completa la lista de revisión que aparece y presiona *Create pull request*.
4. Bernabé lo revisa: puede aprobarlo o dejarte comentarios. Si pide cambios, hazlos en la misma rama, *Commit* y
   *Push*: el pull request se actualiza solo.
5. Después Bernabé lo pasa a revisión final y lo publica en adquilpue.cl.

## 8. Antes de seguir otro día

Trae lo último de la rama y lo nuevo del sitio:

1. En GitHub Desktop, con `ministerio/jovenes` elegida: **Fetch origin** y luego **Pull**.
2. *Branch → Merge into current branch…* → elige **`dev`** → *Merge* (trae los cambios generales del sitio a tu rama).
   Luego *Push origin*.

## 9. Reglas cortas

- Trabaja solo en tu rama y en tu carpeta.
- No subas datos personales que no deban ser públicos (teléfonos personales, direcciones, correos privados).
- Lo amarillo nunca se publica a propósito: reemplázalo o borra esa sección.
- ¿Dudas o algo se rompió? Escríbele a Bernabé antes de intentar arreglarlo a la fuerza: todo se puede recuperar.
