// Elementos del DOM
const juegosContainer = document.getElementById('juegos-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const consolaFilter = document.getElementById('consola-filter');
const generoFilter = document.getElementById('genero-filter');
const yearFilter = document.getElementById('year-filter');
const puntuacionFilter = document.getElementById('puntuacion-filter');
const modal = document.getElementById('game-modal');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

let juegosActualizados = [];

document.addEventListener('DOMContentLoaded', async () => {
    // Cargar versión estática inicial
    juegosActualizados = [...juegos];
    cargarJuegos(juegosActualizados);
    setupEventListeners();
    
    // Actualizar con datos de la API en segundo plano
    try {
        const actualizados = await actualizarPuntuaciones();
        juegosActualizados = actualizados;
        cargarJuegos(juegosActualizados);
        agregarListenersDetalles();
    } catch (error) {
        console.error("Error al actualizar:", error);
    }
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
    puntuacionFilter.addEventListener('change', filtrarJuegos);
    
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
    const puntuacionSeleccionada = puntuacionFilter.value;
    
    // Filtrar juegos según criterios
    const juegosFiltrados = juegosActualizados.filter(juego => {
        // Filtro por texto de búsqueda
        const coincideTexto = juego.nombre.toLowerCase().includes(textoBusqueda) || 
                             juego.descripcion.toLowerCase().includes(textoBusqueda);
        
        // Filtro por consola
        const coincideConsola = consolaSeleccionada === 'todas' || juego.consola === consolaSeleccionada;
        
        // Filtro por género
        const coincideGenero = generoSeleccionado === 'todos' || 
                               juego.genero.some(g => g.toLowerCase() === generoSeleccionado.toLowerCase());
        
        // Filtro por año
        let coincideYear = false;
        if (yearSeleccionado === 'todos') {
            coincideYear = true;
        } else if (yearSeleccionado === 'older') {
            coincideYear = juego.year < 2019;
        } else {
            coincideYear = juego.year === parseInt(yearSeleccionado);
        }
        
        // Filtro por puntuación
        let coincidePuntuacion = false;
        const puntuacion = juego.puntuacionActualizada !== undefined && juego.puntuacionActualizada !== null 
            ? parseFloat(juego.puntuacionActualizada) 
            : juego.puntuacion;
        
        if (puntuacionSeleccionada === 'todos') {
            coincidePuntuacion = true;
        } else if (puntuacionSeleccionada === '90') {
            coincidePuntuacion = puntuacion >= 90;
        } else if (puntuacionSeleccionada === '80') {
            coincidePuntuacion = puntuacion >= 80 && puntuacion < 90;
        } else if (puntuacionSeleccionada === '70') {
            coincidePuntuacion = puntuacion >= 70 && puntuacion < 80;
        } else if (puntuacionSeleccionada === 'menos70') {
            coincidePuntuacion = puntuacion < 70;
        }
        
        // Devolver true solo si cumple todos los criterios
        return coincideTexto && coincideConsola && coincideGenero && coincideYear && coincidePuntuacion;
    });
    
    // Cargar los juegos filtrados en el contenedor
    cargarJuegos(juegosFiltrados);
    
    // Mostrar mensaje si no hay resultados
    if (juegosFiltrados.length === 0) {
        juegosContainer.innerHTML = '<p class="no-results">No se encontraron juegos que coincidan con tu búsqueda. ¡Intenta con otros criterios!</p>';
    }
}
//Función para cargar juegos
function cargarJuegos(juegosArray) {
    juegosContainer.innerHTML = '';
    
    juegosArray.forEach(juego => {
        const consolaClase = juego.consola.toLowerCase().replace(/\s+/g, '-');
        const puntuacion = juego.puntuacionActualizada !== undefined && juego.puntuacionActualizada !== null 
            ? parseFloat(juego.puntuacionActualizada) 
            : juego.puntuacion;
        const puntuacionMostrada = `${puntuacion.toFixed(0)}/100`;
        const esActualizada = juego.puntuacionActualizada !== undefined && juego.puntuacionActualizada !== null;
        
        const juegoCard = document.createElement('div');
        juegoCard.className = 'juego-card';
            juegoCard.innerHTML = `
                <img src="${juego.imagen}" alt="${juego.nombre}" class="juego-img">
            <div class="juego-info">
                <h3>${juego.nombre}</h3>
                <span class="consola ${consolaClase}">${getConsolaNombre(juego.consola)}</span>
                <p>Lanzamiento: ${juego.year}</p>
                <p>Género: ${formatearGeneros(juego.genero)}</p>
                <div class="puntuacion-container">
                    <span class="puntuacion ${esActualizada ? 'actualizada' : ''}">
                        ${puntuacionMostrada}
                        ${esActualizada ? '<span class="badge-actualizada">Live</span>' : ''}
                    </span>
                </div>
                <button class="details-btn" data-id="${juego.id}">Ver Detalles</button>
            </div>
        `;
        
        juegosContainer.appendChild(juegoCard);
    });
    
    agregarListenersDetalles();
}

function agregarListenersDetalles() {
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const juegoId = parseInt(btn.dataset.id);
            mostrarDetalles(juegoId);
        });
    });
}

// Función para mostrar los detalles de un juego en el modal
function mostrarDetalles(juegoId) {
    const juego = juegosActualizados.find(j => j.id === juegoId);
    if (!juego) return;

    const esActualizada = juego.puntuacionActualizada !== undefined && juego.puntuacionActualizada !== null;
    const puntuacion = esActualizada ? parseFloat(juego.puntuacionActualizada) : juego.puntuacion;
    const puntuacionMostrada = `${puntuacion.toFixed(0)}/100`;
    
    modalDetails.innerHTML = `
        <div class="modal-img">
            <img src="${juego.imagen}" alt="${juego.nombre}">
        </div>
        <div class="modal-info">
            <h3>${juego.nombre}</h3>
            <div class="modal-tags">
                <span class="modal-tag consola ${juego.consola.toLowerCase().replace(/\s+/g, '-')}">
                    ${getConsolaNombre(juego.consola)}
                </span>
                ${juego.genero.map(g => `
                    <span class="modal-tag">${capitalizarPrimeraLetra(g)}</span>
                `).join('')}
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
                    <div class="stat-value ${esActualizada ? 'actualizada' : ''}">
                        ${puntuacionMostrada}
                        ${esActualizada ? '<span class="badge-actualizada">Live</span>' : ''}
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-title">Precio</div>
                    <div class="stat-value">$${juego.precio.toFixed(2)}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-title">Multijugador</div>
                    <div class="stat-value">${juego.multijugador ? 'Sí' : 'No'}</div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Función de utilidad para obtener el nombre completo de la consola
function getConsolaNombre(consolaKey) {
    const consolas = {
        'playstation 4': 'Playstation 4',	
        'playstation 3': 'Playstation 3',
        'playstation 2': 'Playstation 2',
        'psp': 'PSP',
        'xbox': 'Xbox',
        'nintendo': 'Nintendo',
        'pc': 'PC',
        'psp': 'PSP',
        'xbox': 'Xbox',
        'nintendo': 'Nintendo',
        'pc': 'PC'
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