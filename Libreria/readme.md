# 📚 Librería Luz - E-commerce Educativo

Una aplicación web de librería online desarrollada con HTML, CSS y JavaScript Vanilla.

## 🚀 Características

- Catálogo de libros con precios y descripciones
- Carrito de compras funcional
- Resúmenes interactivos de cada libro
- PDFs descargables simulados
- Diseño responsive para móviles y desktop
- Sin dependencias externas - Todo en Vanilla JS

## 🏗️ Estructura del Proyecto

```
libreria-luz/
├── index.html              # Redirección a main.html
├── main.html              # Página principal de la tienda
├── css/
│   ├── styles.css         # Estilos de la tienda
│   ├── resumen_styles.css # Estilos páginas de resumen
│   └── pdf_styles.css     # Estilos para PDFs simulados
├── js/
│   ├── script.js          # Lógica de la tienda
│   └── pdf_script.js      # Funciones para PDFs
├── resumenes/             # Páginas de resumen (6 libros)
└── pdfs/                  # PDFs simulados en HTML (6 libros)
```

## 📚 Libros Disponibles

1. **Don Quijote de la Mancha** - Miguel de Cervantes (€15.99)
2. **Los tres mundos** - Santiago Posteguillo (€18.50)
3. **Misión en París** - Arturo Pérez-Reverte (€12.99)
4. **El loco Dios en el fin del mundo** - Javier Cercas (€9.99)
5. **La asistenta** - Freida McFadden (€16.99)
6. **Reconciliación. Memorias** - Juan Carlos I (€14.50)

## 🛠️ Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, Variables CSS)
- JavaScript ES6+
- Local Storage para persistencia
- Print Styles para PDFs

## 🎯 Funcionalidades

### Tienda Principal
- Visualización de productos con emojis
- Filtros por categoría (próximamente)
- Sistema de carrito con cantidades
- Cálculo automático del total

### Sistema de Resúmenes
- Páginas dedicadas para cada libro
- Diseño uniforme y responsive
- Navegación entre tienda y resúmenes

### PDFs Simulados
- Contenido en HTML optimizado para impresión
- 2 páginas por libro
- Botón de imprimir/descargar
- Estructura profesional

## 🚀 Cómo Usar

1. **Clona el repositorio:**
```bash
git clone https://github.com/tuusuario/libreria-luz.git
```

2. **Abre el proyecto:**
```bash
cd libreria-luz
```

3. **Ejecuta un servidor local:**
```bash
# Con Python
python -m http.server 8000

# O simplemente abre main.html en tu navegador
```

4. **Accede en tu navegador:**
```
http://localhost:8000/main.html
```

## 📱 Compatibilidad

- Chrome 90+, Firefox 88+, Safari 14+
- iOS 12+, Android 8+
- Windows, macOS, Linux

## 🎨 Personalización

Para añadir nuevos libros:

1. Añade el producto en `js/script.js`
2. Crea la página de resumen en `resumenes/`
3. Crea el PDF en `pdfs/`
4. Usa las plantillas existentes

## 🔧 Scripts Principales

### `script.js` - Lógica de la Tienda
```javascript
- initStore()           // Inicialización
- renderProducts()      // Renderizar catálogo
- addToCart()          // Añadir al carrito
- updateCartDisplay()  // Actualizar carrito
- downloadPDF()        // Descargar PDFs
```

### `pdf_script.js` - Funciones PDF
```javascript
- initPDF()            // Inicializar PDF
- addCurrentDate()     // Añadir fecha
- setupPrintButton()   // Configurar impresión
- addPageNumbers()     // Numerar páginas
```

## 📝 Notas

- Proyecto educativo sin backend real
- Los PDFs son HTML estilizados
- El carrito usa Local Storage
- Diseño mobile-first

## 📈 Posibles Mejoras Futuras

1. **Backend Real**: Conectar con una API REST
2. **Sistema de Usuarios**: Registro, login y perfiles
3. **Pasarela de Pago**: Integración con Stripe/PayPal
4. **Búsqueda y Filtros**: Buscar libros por autor/género
5. **Reseñas y Valoraciones**: Sistema de comentarios
6. **Modo Oscuro**: Alternativa de tema oscuro
7. **Internacionalización**: Soporte para múltiples idiomas

## 📄 Licencia

Proyecto educativo - Uso libre para aprendizaje.

## 👤 Autor

Desarrollado como proyecto educativo para CISE.

---

**¿Preguntas o sugerencias?** Abre un issue en el repositorio.