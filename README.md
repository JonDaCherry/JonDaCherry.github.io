# From Games - Catálogo de Videojuegos

Un sitio web responsivo que muestra un catálogo de videojuegos para diferentes consolas (PlayStation y PC).

## Características Principales

- Diseño moderno con temática gamer (fondos oscuros con acentos de colores neón)
- Interfaz responsiva para móviles, tablets y computadoras de escritorio
- Funcionalidades de filtrado y búsqueda:
  - Filtrar por consola
  - Filtrar por género
  - Filtrar por año de lanzamiento
  - Búsqueda por texto (nombre o descripción)
- Tarjetas de juegos con:
  - Imagen de portada
  - Nombre del juego
  - Consola
  - Año de lanzamiento
  - Género
  - Botón para ver detalles
- Modal de detalles con información adicional del juego
- Animaciones suaves para una mejor experiencia de usuario
- Diseño responsivo para diferentes dispositivos

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS, Flexbox y Grid)
- JavaScript (Vanilla JS)
- Fuentes e iconos de CDN: Font Awesome

## Estructura del Proyecto

```
catalogo-videojuegos/
│
├── index.html         # Estructura principal del sitio
├── css/
│   └── styles.css     # Estilos del sitio
├── js/
│   ├── data.js        # Datos de ejemplo de juegos
│   └── main.js        # Funcionalidades interactivas
└── images/            # Carpeta para imágenes (opcional)
```

## Instrucciones de Uso

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador favorito
3. ¡Explora el catálogo de juegos y disfruta de las funcionalidades!

## Personalización

- Modifica el archivo `data.js` para agregar, editar o eliminar juegos del catálogo
- Ajusta los colores en las variables CSS del archivo `styles.css` según tus preferencias
- Personaliza los filtros de géneros y años en el archivo HTML

## Futuras Mejoras

- Implementar un backend para almacenar los datos de los juegos en una base de datos
- Agregar funcionalidad de inicio de sesión para guardar juegos favoritos
- Implementar sistema de reseñas y puntuaciones de usuarios
- Agregar sección de próximos lanzamientos
- Mejorar la accesibilidad del sitio web 