// Elementos del DOM
const juegosContainer = document.getElementById('juegos-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const consolaFilter = document.getElementById('consola-filter');
const generoFilter = document.getElementById('genero-filter');
const yearFilter = document.getElementById('year-filter');
const modal = document.getElementById('game-modal');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Inicialización de la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargar juegos iniciales
    cargarJuegos(juegos);
    
    // Configurar eventos
    setupEventListeners();
});

// Configurar todos los event listeners
function setupEventListeners() {
    // Eventos de filtrado y búsqueda
    searchBtn.addEventListener('click', filtrarJuegos);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filtrarJuegos();
        }
    });
    
    consolaFilter.addEventListener('change', filtrarJuegos);
    generoFilter.addEventListener('change', filtrarJuegos);
    yearFilter.addEventListener('change', filtrarJuegos);
    
    // Evento para cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Toggle menú móvil
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Función para filtrar juegos según los criterios seleccionados
function filtrarJuegos() {
    const textoBusqueda = searchInput.value.toLowerCase().trim();
    const consolaSeleccionada = consolaFilter.value;
    const generoSeleccionado = generoFilter.value;
    const yearSeleccionado = yearFilter.value;
    
    // Filtrar juegos según criterios
    const juegosFiltrados = juegos.filter(juego => {
        // Filtro por texto de búsqueda
        const coincideTexto = juego.nombre.toLowerCase().includes(textoBusqueda) || 
                             juego.descripcion.toLowerCase().includes(textoBusqueda);
        
        // Filtro por consola
        const coincideConsola = consolaSeleccionada === 'todas' || juego.consola === consolaSeleccionada;
        
        // Filtro por género
        const coincideGenero = generoSeleccionado === 'todos' || juego.genero.includes(generoSeleccionado);
        
        // Filtro por año
        let coincideYear = false;
        if (yearSeleccionado === 'todos') {
            coincideYear = true;
        } else if (yearSeleccionado === 'older') {
            coincideYear = juego.year < 2020;
        } else {
            coincideYear = juego.year === parseInt(yearSeleccionado);
        }
        
        // Devolver true solo si cumple todos los criterios
        return coincideTexto && coincideConsola && coincideGenero && coincideYear;
    });
    
    // Cargar los juegos filtrados en el contenedor
    cargarJuegos(juegosFiltrados);
    
    // Mostrar mensaje si no hay resultados
    if (juegosFiltrados.length === 0) {
        juegosContainer.innerHTML = '<p class="no-results">No se encontraron juegos que coincidan con tu búsqueda. ¡Intenta con otros criterios!</p>';
    }
}

// Función para cargar juegos en el contenedor
function cargarJuegos(juegosArray) {
    // Limpiar el contenedor
    juegosContainer.innerHTML = '';
    
    // Crear una tarjeta para cada juego
    juegosArray.forEach(juego => {
        // Crear elementos del DOM
        const juegoCard = document.createElement('div');
        juegoCard.className = 'juego-card';
        
        // Clases específicas para animar la entrada
        juegoCard.classList.add('fade-in');
        
        // Construir HTML interno
        juegoCard.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}" class="juego-img">
            <div class="juego-info">
                <h3>${juego.nombre}</h3>
                <span class="consola ${juego.consola}">${getConsolaNombre(juego.consola)}</span>
                <p>Lanzamiento: ${juego.year}</p>
                <p>Género: ${formatearGeneros(juego.genero)}</p>
                <button class="details-btn" data-id="${juego.id}">Ver Detalles</button>
            </div>
        `;
        
        // Agregar al contenedor
        juegosContainer.appendChild(juegoCard);
        
        // Agregar evento para mostrar detalles
        const detallesBtn = juegoCard.querySelector('.details-btn');
        detallesBtn.addEventListener('click', () => mostrarDetalles(juego.id));
    });
}

// Función para mostrar los detalles de un juego en el modal
function mostrarDetalles(juegoId) {
    // Encontrar el juego por ID
    const juego = juegos.find(j => j.id === juegoId);
    
    if (!juego) return;
    
    // Preparar contenido del modal
    modalDetails.innerHTML = `
        <div class="modal-img">
            <img src="${juego.imagen}" alt="${juego.nombre}">
        </div>
        <div class="modal-info">
            <h3>${juego.nombre}</h3>
            <div class="modal-tags">
                <span class="modal-tag consola ${juego.consola}">${getConsolaNombre(juego.consola)}</span>
                ${juego.genero.map(g => `<span class="modal-tag">${capitalizarPrimeraLetra(g)}</span>`).join('')}
                <span class="modal-tag">${juego.year}</span>
            </div>
            <div class="modal-description">
                ${juego.descripcion}
            </div>
            <div class="modal-stats">
                <div class="stat-item">
                    <div class="stat-title">Desarrollador</div>
                    <div class="stat-value">${juego.desarrollador}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-title">Puntuación</div>
                    <div class="stat-value">${juego.puntuacion}/100</div>
                </div>
                <div class="stat-item">
                    <div class="stat-title">Precio</div>
                    <div class="stat-value">$${juego.precio}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-title">Multijugador</div>
                    <div class="stat-value">${juego.multijugador ? 'Sí' : 'No'}</div>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar el modal
    modal.style.display = 'block';
}

// Función de utilidad para obtener el nombre completo de la consola
function getConsolaNombre(consolaKey) {
    const consolas = {
        'playstation 4': 'PlayStation 4',	
        'playstation 3': 'PlayStation 3',
        'playstation 2': 'PlayStation 2',
        'Playstation 2': 'PlayStation 2',
        'Playstation 3': 'PlayStation 3',
        'Playstation 4': 'PlayStation 4',
        'psp': 'PSP',
        'xbox': 'Xbox',
        'nintendo': 'Nintendo',
        'pc': 'PC',
        'Psp': 'PSP',
        'Xbox': 'Xbox',
        'Nintendo': 'Nintendo',
        'PC': 'PC'
    };
    
    return consolas[consolaKey] || consolaKey;
}

// Función de utilidad para formatear la lista de géneros
function formatearGeneros(generos) {
    return generos.map(g => capitalizarPrimeraLetra(g)).join(', ');
}

// Función de utilidad para capitalizar la primera letra
function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.juego-card');
    
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.classList.add('appear');
        }
    });
}); 