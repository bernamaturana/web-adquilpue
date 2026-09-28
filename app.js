// Menú en celular, próxima reunión en la franja superior y el día de hoy destacado en los horarios.
// Sin dependencias; si JavaScript no carga, la página funciona igual (menú visible, textos fijos).
document.documentElement.classList.add('js');

(() => {
  // Horario semanal (debe coincidir con la sección «Horarios» de index.html). 0 = domingo.
  const MEETINGS = [
    { day: 0, time: '10:30', name: 'Escuela dominical' },
    { day: 0, time: '11:30', name: 'Culto general' },
    { day: 0, time: '18:30', name: 'Culto general' },
    { day: 2, time: '19:00', name: 'Reunión de oración' },
    { day: 4, time: '16:00', name: 'Reunión de damas' },
    { day: 4, time: '19:00', name: 'Estudio bíblico' },
    { day: 6, time: '18:00', name: 'Reunión de jóvenes' },
    { day: 6, time: '18:00', name: 'Reunión de varones' },
  ];
  const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  // Menú
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('menu');
  if (toggle && nav) {
    const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // Próxima reunión (hora de Chile según el dispositivo)
  const now = new Date();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  let next = null;
  for (let offset = 0; offset < 8 && !next; offset++) {
    const day = (now.getDay() + offset) % 7;
    next = MEETINGS
      .filter((m) => m.day === day && (offset > 0 || toMin(m.time) > minutesNow))
      .sort((a, b) => toMin(a.time) - toMin(b.time))
      .map((m) => ({ ...m, offset }))[0] || null;
  }
  const label = document.getElementById('proxima');
  if (next && label) {
    // Reuniones en paralelo (misma hora, salas distintas) se muestran juntas
    const names = MEETINGS.filter((m) => m.day === next.day && m.time === next.time).map((m) => m.name);
    const when = next.offset === 0 ? 'hoy' : next.offset === 1 ? 'mañana' : `el ${DAYS[next.day]}`;
    const title = names.length > 1 ? 'Próximas reuniones' : 'Próxima reunión';
    label.textContent = `${title}: ${names.join(' y ')}, ${when} a las ${next.time}`;
  }

  // Día de hoy en los horarios
  document.querySelectorAll('.day[data-day]').forEach((el) => {
    if (Number(el.dataset.day) === now.getDay()) el.classList.add('today');
  });

  // Pedido de oración: junta nombre, petición y si quiere contacto en un solo mensaje de WhatsApp
  const prayer = document.querySelector('.prayer-form');
  if (prayer) {
    prayer.addEventListener('submit', (e) => {
      const text = prayer.querySelector('#oracion-texto').value.trim();
      if (!text) return;
      e.preventDefault();
      const name = prayer.querySelector('#oracion-nombre').value.trim();
      const contact = prayer.querySelector('#oracion-contacto').checked;
      const lines = [`Hola, ${name ? `soy ${name} y ` : ''}quisiera pedir oración por:`, text];
      if (contact) lines.push('Me gustaría que alguien de la iglesia me contacte.');
      window.open(`${prayer.action}?text=${encodeURIComponent(lines.join('\n\n'))}`, '_blank', 'noopener');
      prayer.reset();
    });
  }

  // Galería de un ministerio: la foto se abre encima de la página (sin JavaScript, el enlace abre la imagen)
  const gallery = document.querySelector('.gallery');
  if (gallery && typeof HTMLDialogElement === 'function') {
    const box = document.createElement('dialog');
    box.className = 'lightbox';
    box.innerHTML = '<button type="button">Cerrar ✕</button><img alt=""><p></p>';
    document.body.appendChild(box);
    const [closeBtn, img, caption] = box.children;
    closeBtn.addEventListener('click', () => box.close());
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
    gallery.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      const thumb = link && link.querySelector('img');
      if (!thumb) return;
      e.preventDefault();
      img.src = link.href;
      img.alt = thumb.alt;
      caption.textContent = thumb.alt;
      box.showModal();
    });
  }

  // Enlaces aún sin dirección real: no llevan a ninguna parte
  document.querySelectorAll('a[data-tbd]').forEach((a) => {
    a.addEventListener('click', (e) => e.preventDefault());
  });

  const year = document.getElementById('anio');
  if (year) year.textContent = String(now.getFullYear());
})();
