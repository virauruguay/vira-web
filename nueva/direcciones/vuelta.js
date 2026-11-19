/* La vuelta: el único gesto de movimiento de la página.
   Un renglón que va derecho, dobla una esquina cerrada de 90° y sigue para abajo,
   como un auto que agarra una calle. Avanza con el desplazamiento, una sola vez.
   Con "reducir movimiento" queda quieto en su posición final. */
(function () {
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-vuelta]').forEach((caja) => {
    const svg = caja.querySelector('svg');
    const camino = svg.querySelector('path');
    const texto = svg.querySelector('textPath');
    const radio = parseFloat(caja.dataset.radio || 120);
    const margenDer = parseFloat(caja.dataset.margen || 0);
    // Posición del comienzo del texto, en "em" antes de la esquina (al cargar y al terminar).
    const inicio = parseFloat(caja.dataset.inicio || 6);
    const fin = parseFloat(caja.dataset.fin || 1);
    let esquina = 0, tam = 0;

    function armar() {
      const w = caja.clientWidth, h = caja.clientHeight;
      tam = parseFloat(getComputedStyle(svg).fontSize);
      const y = tam * 0.82;
      const x1 = w - margenDer - radio;
      esquina = x1 + Math.PI * radio / 4;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      camino.setAttribute('d', `M 0 ${y} H ${x1} A ${radio} ${radio} 0 0 1 ${w - margenDer} ${y + radio} V ${h + tam * 4}`);
      mover();
    }
    function mover() {
      let t = 0;
      if (!quieto) {
        const r = caja.getBoundingClientRect();
        t = Math.min(1, Math.max(0, -r.top / (r.height * 0.9)));
      } else t = 1;
      const em = inicio + (fin - inicio) * t;
      texto.setAttribute('startOffset', Math.max(0, esquina - em * tam));
    }
    armar();
    addEventListener('resize', armar);
    if (!quieto) addEventListener('scroll', () => requestAnimationFrame(mover), { passive: true });
    document.fonts && document.fonts.ready.then(armar);
  });
})();
