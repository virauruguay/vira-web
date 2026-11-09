# VIRA — contexto del proyecto

Este archivo explica qué es VIRA, cómo es la marca y cómo está armada esta web, para que cualquier persona o asistente (por ejemplo, Claude Code) pueda trabajar en el repositorio sin preguntar lo básico.

> **Este repositorio es público.** GitHub Pages publica todos los archivos de la raíz, incluido este. No agregar acá teléfonos, direcciones, datos de clientes, precios internos, contraseñas ni nada privado.

---

## 1. La empresa

**VIRA** es una agencia de Uruguay que hace **marca, anuncios pagos y sitios web**, en un mismo equipo.

- **Socios:** Nicolás Castelló y Román Benítez. El cliente habla siempre directo con los socios.
- **Propósito:** ayudar a negocios chicos (de preferencia con productos propios) a lograr mejores resultados, progresar y verse más profesionales y creativos.
- **Promesa:** crecer más rápido y verse como los grandes, a la escala de cada negocio.
- **Lema:** *Publicidad con otra vuelta.*
- **Etapa:** recién empezando. Todavía no hay casos publicados.

### Posicionamiento
VIRA se ubica entre dos opciones que el cliente siente como malas:
- **El freelancer:** es barato, pero no tiene proceso ni continuidad.
- **La agencia grande:** tiene proceso, pero no te atiende ni te cobra a tu escala.
- **VIRA:** calidad de agencia, con velocidad y trato de socio.

### Servicios
1. **Marca:** logo, colores y tipografía, piezas para redes, cartelería.
2. **Anuncios pagos:** campañas en redes, piezas de anuncio, seguimiento y números claros. Medidos, no adivinados.
3. **Sitios web:** diseño a medida, pensados para el celular, con contacto directo y la misma marca que los anuncios.

### Para quién
**Cualquier tipo de negocio. Todo negocio sirve.** Ejemplos: comercios, tiendas online, cafés y restaurantes, profesionales, salud y bienestar, oficios y talleres, emprendimientos, locales por abrir.

VIRA no se limita a gastronomía.

### Cómo trabajamos (4 pasos)
1. **Charlamos:** cuestionario corto sobre el negocio, su gente y adónde quiere llegar.
2. **Armamos tu marca y tu sitio:** partimos de referencias reales, mostramos opciones con opinión honesta y decide el cliente.
3. **Salimos con anuncios:** campañas que se ven como la marca y apuntan a que venga gente.
4. **Te mostramos los números:** qué se hizo y qué resultado dio, en simple.

### Regla de oro
**No se inventan casos, clientes, testimonios, números ni resultados.** Si no hay dato real, no hay número. Esto vale para la web, las redes y cualquier pieza.

---

## 2. La marca

### Personalidad
Directa, carismática, sincera, real, creativa y original. Un "socio joven": moderna, bold, con actitud.

### Voz
- Español rioplatense, con voseo ("contanos", "elegís", "querés").
- Frases cortas, de frente, sin humo.
- En redes: cercana y profesional.
- **Evitar:** jerga de agencia ("soluciones integrales", "llevamos tu marca al siguiente nivel"), promesas que no se pueden cumplir ("resultados garantizados"), lo infantil, el folklore local y los clichés.

### Logo
- Símbolo: una **V fluida que se enrosca**, más la palabra **"vira"** en minúsculas redondeadas.
- **El logo no se modifica**: no se redibuja, no se estira, no se le agregan efectos. Se usa en una sola tinta de la paleta.
- El sistema visual se construye alrededor del logo, sin tocarlo.
- Los estilos (halftone, wireframe, etc.) se aplican al **símbolo** como recurso gráfico, nunca reemplazan al logo.

### Paleta
| Nombre | Hex | Uso |
|---|---|---|
| Azul | `#2E43E0` | Color principal de la marca |
| Mandarina | `#FF7A3D` | Acento: botones, detalles, un golpe de color |
| Negro | `#0B0B0F` | Fondos oscuros y texto |
| Niebla | `#EEF0FA` | Fondos claros |
| Blanco | `#FFFFFF` | Texto sobre azul y negro |
| Azul oscuro | `#2536C2` | Apoyo (sombras, manchas) |
| Azul claro | `#6F82FF` | Apoyo (manchas líquidas de fondo) |

**Contraste (verificado):**
- Blanco sobre azul: 7,0:1. Sirve para texto.
- Negro sobre mandarina: 7,6:1. Sirve para texto.
- Negro sobre niebla: 17,3:1. Sirve para texto.
- **Mandarina sobre azul: 2,7:1. No usar para texto**, solo formas.
- **Blanco sobre mandarina: 2,6:1. No usar.**

### Tipografía
- **Figtree** (Google Fonts) para todo: titulares en 800, cuerpo en 400/500.
- **JetBrains Mono** solo para etiquetas chicas y datos.

### Referencias visuales
Supreme, Corteiz, Stüssy, Instagram, Alpinestars, Fox Racing, McLaren (2000), FedEx, Apple.

### Banco de estilos explorados
Se exploraron 11 estilos alrededor del logo. Rol de cada uno en el sistema:
- **Drop** (colores planos, titulares itálicos pesados, sombras duras, stickers y cinta): base para piezas de redes.
- **Glass / liquid morph** (vidrio esmerilado y manchas de color que se funden): estilo de la web actual.
- **Halftone** (puntos en dos tintas): fondos, fotos de clientes, stickers.
- **Kinetic** (texto en movimiento): historias y reels.
- **Wireframe 3D** (el símbolo en capas): web y video.
- **Partículas / ASCII:** texturas para web.
- **Holográfico:** edición especial (stickers, tarjetas). Una sola pieza por diseño.
- **Relieve** (emboss, foil, barniz): piezas físicas.
- **Pixel art:** la "moneda" de VIRA como mascota (stickers, avatares).
- **Tribu y Livery:** detalles puntuales.

---

## 3. La web

### Datos
- **URL:** https://vira.com.uy
- **Hosting:** GitHub Pages, desde este repositorio (`virauruguay/vira-web`), rama `main`, carpeta raíz.
- **Dominio:** `vira.com.uy`, registrado en nic.com.uy. DNS con registros A (`@` y `www`) hacia las IPs de GitHub Pages: 185.199.108.153, 185.199.109.153, 185.199.110.153 y 185.199.111.153.
- **Publicar un cambio:** commit y push a `main`. En 1 o 2 minutos se actualiza (ver la pestaña Actions: "pages build and deployment").

### Archivos
| Archivo | Qué es |
|---|---|
| `index.html` | La web completa en un solo archivo: HTML, estilos, scripts y logos embebidos. |
| `og.png` | Imagen de 1200×630 que aparece al compartir el link. |
| `404.html` | Página para direcciones que no existen. |
| `robots.txt` y `sitemap.xml` | Indicaciones para buscadores. |
| `.nojekyll` | Hace que GitHub Pages publique los archivos tal cual. |
| `CNAME` | Lo crea GitHub con el dominio. No borrarlo. |
| `CLAUDE.md` | Este archivo. |

### Cómo está armado `index.html`
- **Base:** la versión "v2" de la web. Encima se sumaron liquid morph, vidrio, partículas, wireframe y halftone.
- **Secciones (por `id`):** `#hero`, `#problema`, `#que-hacemos`, `#como`, `#para-quien`, `#socios`, `#hablemos` y el `footer`.
- **Efectos:**
  - Portada: líquido en WebGL (`#liquid`), manchas de color que se funden y siguen al mouse, solo en la mitad derecha.
  - Placas de vidrio (`.glass`): servicios, pilares, pasos, formulario.
  - Halftone en canvas: divisores (`.htc`), el símbolo de fondo (`.htart`) y las esquinas de las tarjetas (`.htcorner`).
  - Cómo trabajamos: el símbolo en wireframe 3D en WebGL (`#wire`), que gira un cuarto de vuelta por paso.
  - Cierre: el símbolo hecho de partículas (`#field`), detrás del formulario.
- **Rendimiento:** los efectos se pausan cuando no se ven y bajan la calidad solos si el equipo no da abasto. Las olas entre secciones se mueven con `transform`. Las manchas de fondo están quietas, porque moverlas detrás del vidrio es costoso.
- **Accesibilidad:** botón "Pausar movimiento", respeto de `prefers-reduced-motion`, zonas de toque de 44 px, contraste según la paleta.
- **Logos:** en vector (SVG embebido) para que se vean nítidos.

### Contacto en la web
Se configura en la constante `CONTACTO`, al principio del `<script>` principal de `index.html`:

```js
const CONTACTO = { whatsapp: '', email: 'vira.uruguay@gmail.com', instagram: 'vira.uruguay' };
```

- `whatsapp`: solo números, con código de país, por ejemplo `598XXXXXXXX`. **Todavía vacío.**
- El formulario usa WhatsApp si existe; si no, el mail; si no, Instagram.
- Los íconos de contacto (mail, Instagram, WhatsApp) aparecen solos según lo que esté cargado.

### Reglas para editar la web
1. Antes de cambiar algo, **buscar la parte puntual** en `index.html` en vez de leer el archivo entero: pesa unos 670 KB por los logos embebidos.
2. Mantener todo en español rioplatense y en la voz de la marca.
3. No inventar datos (ver la regla de oro).
4. Respetar la paleta, los contrastes y las zonas de toque de 44 px.
5. Probar en celular (unos 390 px de ancho) y en escritorio.
6. No borrar las etiquetas `meta` de compartir, el enlace canónico, ni `CNAME`.
7. Mensajes de commit claros, en español.

---

## 4. Canales

- **Web:** https://vira.com.uy
- **Instagram:** [@vira.uruguay](https://instagram.com/vira.uruguay)
- **Mail:** vira.uruguay@gmail.com
- **WhatsApp Business:** número propio de VIRA, todavía no cargado en la web.

---

## 5. Pendientes

- [ ] Cargar el número de WhatsApp en `CONTACTO`.
- [ ] Fotos reales de los socios para la sección Nosotros (hoy muestra iniciales).
- [ ] Decidir si se mantiene la frase "No es para…" en la sección Para quién.
- [ ] Sección de preguntas frecuentes (precios, tiempos, qué incluye cada servicio), cuando estén definidos.
- [ ] Archivo oficial del logo en vector.
- [ ] Configurar Meta Business Suite para el WhatsApp de VIRA.
- [ ] Opcional: dividir `index.html` en archivos más chicos (estilos, scripts, logos) para que mantenerlo sea más liviano.
- [ ] Sumar el primer caso real cuando exista, con fotos y números reales.

---

## 6. Cómo trabajar en diseño y marca para VIRA

- Antes de diseñar: hacer un cuestionario o brief.
- Partir de las referencias reales de la marca.
- Generar con herramientas reales; no conformarse con formas simples dibujadas.
- Mostrar varias opciones, con una opinión honesta de cada una, y dejar que decidan los socios.
- Después de elegir: desarrollar el sistema completo y el manual.
- Nada de estética genérica ni plantillas: criterio y resultado de diseñador real.
