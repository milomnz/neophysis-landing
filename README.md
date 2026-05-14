# Neo Physis - Landing Page Completa

Implementación moderna, responsive y semántica de una landing page científica con sección héroe, CTA y formulario interactivo.

## Componentes

### Sección Héroe
La sección héroe (`<header class="neo-physis-hero">`) es el primer elemento visual de la landing page y proporciona:
- **Logo integrado**: Visualización de `Logo2.png` con efecto de glow y hover animation
- **Propuesta de valor**: Título principal, subtítulo en cian y descripción convincente
- **Call-to-action**: Dos botones (primario y secundario) para explorar o unirse
- **Elementos decorativos**: Orbes animadas en el fondo con blur para dar profundidad
- **Responsive**: Disposición vertical en mobile, horizontal en desktop (2 columnas)

**Características técnicas:**
- Glassmorphism con backdrop-filter blur(10px)
- Animaciones escalonadas (fadeInUp con delays)
- Logo con drop-shadow glow que aumenta al hacer hover
- Gradiente de fondo coherente con el tema científico

### Sección CTA + Beneficios
La sección CTA (`<section class="neo-physis-cta">`) presenta:
- **Eyebrow tag**: Etiqueta "Neo Physis · Ciencia colaborativa"
- **Título persuasivo**: Mensaje principal sobre biotecnología
- **Descripción**: Contextualización de la propuesta
- **Botones de acción**: Navegación interna a formulario y beneficios
- **Tarjetas de beneficios**: Estadísticas (+120 investigadores, 24/7, 100%) en grid responsive
- **Footer informativo**: Mensaje de cierre sobre la misión

### Sección de Formulario
La sección formulario (`<form class="neo-physis-form">`) incluye:
- **Campos semánticos**: Nombre, email, área de investigación, mensaje
- **Validación visual**: Estados valid/invalid con feedback en tiempo real
- **Selects personalizados**: Opciones de áreas de investigación (biotecnología vegetal, microbiología, etc.)
- **Textarea**: Para propuestas y descripciones detalladas
- **Feedback visual**: Mensajes de error y success con colores diferenciados
- **Accesibilidad**: aria-live, labels asociados, focus states visibles

### Sección de Valores y Beneficios
La sección de valores y beneficios (`<section class="valores">`) presenta:
- **Encabezado atractivo**: Etiqueta "Valores y beneficios", título principal y descripción contextual
- **Cards de valores (4 items)**:
  - 🔬 Rigor científico
  - 🤝 Colaboración
  - 🌱 Impacto regional
  - 💡 Innovación abierta
- **Botones interactivos de beneficios (4 items)**:
  - Sistema accordion con expand/collapse
  - Descripción detallada de cada beneficio
  - Animación suave al abrir/cerrar
- **Efectos visuales**:
  - Grid responsivo (4 columnas en desktop, 2 en tablet, 1 en mobile)
  - Hover effects con transformación y cambio de color
  - Animaciones de entrada con IntersectionObserver
  - Brillos flotantes y cuadrícula de fondo tecnológica

**Características técnicas:**
- Intersection Observer para animaciones al hacer scroll
- Toggle dinámico de estado activo en beneficios
- Grid responsivo que se adapta a todos los breakpoints
- Animación `valoresFloatGlow` continua en el fondo

## Sustentación

### 1. Arquitectura CSS
- Se utilizó **metodología BEM** para mantener nombres de clases claros, escalables y fáciles de mantener.
- La separación entre estructura, estilos e interacción permite que cada sección sea fácil de integrar o modificar independientemente.
- Se priorizó una estructura simple y predecible para evitar dependencias innecesarias.
- **Sección Héroe**: `.neo-physis-hero` con elementos como `__logo-wrapper`, `__main-title`, `__button--primary/secondary`
- **Sección CTA**: `.neo-physis-cta` con elementos como `__content`, `__title`, `__benefit-card`
- **Sección Formulario**: `.neo-physis-form` con elementos como `__input`, `__label`, `__feedback`, `__submit`
- **Sección Valores**: `.valores` con bloques como `__card`, `__bloque`, `__grid` y modificadores `--visible`
- **Sección Beneficios**: `.beneficios` con botones `.beneficios__item` y modificadores `--activo` para estado expandido

### 2. Organización de estilos
- Los estilos se agruparon por **componente principal**: Héroe, CTA, beneficios, formulario y estado visual.
- Se trabajó con **variables CSS** (custom properties) para centralizar:
  - Colores: `--accent` (#00e5ff), `--accent-strong` (#14ffec), `--bg` (#0b1026)
  - Espaciado: `--radius-xl` (28px), `--radius-lg` (22px), `--radius-md` (16px)
  - Animaciones: `--transition` (220ms ease)
  - Tipografía: `--font` (Manrope)
- Las **media queries** se aplicaron con enfoque **mobile first** para mejorar la lectura y el mantenimiento:
  - Mobile: 1 columna (64px padding)
  - Tablet (768px+): 2 columnas con layouts optimizados (96px padding)
  - Desktop (1024px+): Disposición completa con formulario sticky (120px padding)

### 3. Ventajas de la metodología aplicada
- Facilita el crecimiento del proyecto sin que el CSS se vuelva difícil de leer.
- Reduce la posibilidad de conflictos entre clases.
- Permite reutilizar componentes visuales en futuras secciones de la landing page.

### 4. Buenas prácticas de diseño aplicadas
- **HTML5 semántico**: 
  - `<header>` con `role="banner"` en sección héroe
  - `<h1>` para el título principal (SEO)
  - `<form>` con `novalidate` para validación personalizada
  - `<label>` asociados a cada input
  - `aria-hidden="true"` en elementos decorativos
  - `aria-live="polite"` para mensajes de feedback dinámicos
  
- **Formularios accesibles**:
  - Labels, placeholders, focus states visibles
  - Mensajes de estado con colores diferenciados (verde success, rojo error)
  - Validación en tiempo real sin interferir con la UX
  
- **Botones con microinteracciones**:
  - Efecto hover: elevación (translateY -2px) + glow
  - Focus-visible: outline coloreado (accesibilidad)
  - Gradientes lineales para profundidad
  - Box-shadow con blur para efectos de luz
  
- **Animaciones suaves**:
  - `fadeInUp`: entrada escalonada de elementos (900ms)
  - `floatGlow`: movimiento flotante de orbes (12s)
  - Respetar `prefers-reduced-motion` para usuarios sensibles

### 5. Justificación UX/UI
- **Paleta de colores**: Tonos fríos y tecnológicos (azul profundo #0b1026, cian #00e5ff, verde agua #14ffec) para asociar con ciencia e innovación. El degradado de fondo crea sensación de profundidad sin distraer.
  
- **Tipografía**: Manrope con pesos 400-800 proporciona lectura cómoda (display) y apariencia moderna. Los tamaños escalables (clamp) se adaptan a cualquier viewport.
  
- **Jerarquía visual**:
  - Héroe: Logo → Título → Subtítulo → Descripción → Botones (flujo descendente)
  - CTA: Eyebrow → Título → Descripción → Botones → Beneficios (progresión lógica)
  - Formulario: Campos ordenados de arriba a abajo, submit al final
  
- **Accesibilidad**: 
  - Contraste de colores optimizado (texto claro sobre fondos oscuros)
  - Focus states visibles en todos los elementos interactivos
  - Feedback visual inmediato (colores success/error)
  - ARIA labels y live regions
  
- **Flujo de navegación**: 
  - Héroe introduce la propuesta
  - CTA amplía el valor (con beneficios sociales)
  - Formulario convierte el interés en acción (registro)
  - Botones internos facilitan navegación sin fricción

### 6. Aporte de cada estudiante
- Cada integrante puede explicar una parte específica del desarrollo: estructura HTML, diseño visual, responsive, validación y animaciones.
- Esto muestra trabajo colaborativo y dominio del componente desde distintas perspectivas técnicas.

### 7. Mensaje de cierre para exponer
- Neo Physis busca conectar investigación, divulgación y colaboración científica en una interfaz moderna, clara y profesional.
- La sección CTA + formulario está pensada para convertir interés en participación activa dentro de la comunidad.

## Archivos
- `index.html`: Estructura semántica completa (héroe, CTA, formulario)
- `styles.css`: Estilos BEM organizados por componente, responsive, glassmorphism y animaciones
- `script.js`: Validación visual y microinteracciones del formulario
- `Logo2.png`: Logo de Neo Physis integrado en la sección héroe

## Uso

### Visualizar la página
Abre `index.html` en el navegador para ver la landing page completa con:
1. **Sección Héroe** (encabezado con logo y propuesta de valor)
2. **Sección CTA** (propuesta detallada con beneficios rápidos)
3. **Sección Formulario** (registro interactivo)
4. **Sección Valores y Beneficios** (detalle de la propuesta de valor con cards interactivas)

### Integrar componentes
Puedes integrar **componentes individuales** en otros proyectos:
- **Solo héroe**: Copia el bloque `<header class="neo-physis-hero">` + estilos `.neo-physis-hero`
- **Solo CTA**: Copia el bloque `<section class="neo-physis-cta">` + estilos `.neo-physis-cta`
- **Solo formulario**: Copia el `<form class="neo-physis-form">` + estilos `.neo-physis-form`
- **Solo valores y beneficios**: Copia el bloque `<section class="valores">` + estilos `.valores` y `.beneficios` + lógica de interactividad

### Personalizar
Las variables CSS en `:root` permiten personalizar fácilmente:
```css
:root {
  --accent: #00e5ff;           /* Color principal (cian) */
  --accent-strong: #14ffec;    /* Color secundario (cian fuerte) */
  --bg: #0b1026;               /* Fondo oscuro */
  --text: #ffffff;             /* Texto principal */
  --radius-xl: 28px;           /* Bordes grandes */
}
```

## Estructura HTML Semántica
```
<body>
  <main>
    <header class="neo-physis-hero">
      <!-- Logo, título, descripción, botones -->
    </header>
    
    <section class="neo-physis-cta">
      <!-- CTA, beneficios, formulario -->
    </section>
  </main>
</body>
```

## Animaciones Incluidas
- **fadeInUp**: Entrada suave de elementos (900ms)
- **floatGlow**: Movimiento flotante decorativo (12s)
- **Hover effects**: Elevación y glow en botones y tarjetas
- **Focus states**: Contornos visibles para navegación por teclado

## Compatibilidad
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive (desde 320px hasta 1920px+)
- Respeta `prefers-reduced-motion` para usuarios sensibles a animaciones
