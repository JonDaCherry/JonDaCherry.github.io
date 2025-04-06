// Datos de ejemplo para el catálogo de juegos
const juegos = [
    {
        id: 1,
        nombre: "7 Days to Die",
        consola: "playstation 4",
        genero: ["aventura", "accion"],
        year: 2013,
        imagen: "https://www.theactionpixel.com/wp-content/uploads/2016/04/7daystodie_title.jpg",
        descripcion: "Explora el reino de Hyrule en esta épica aventura de mundo abierto. Enfréntate a peligros, resuelve rompecabezas y derrota al malvado Ganon para salvar al reino.",
        desarrollador: "The Fun Pimps",
        puntuacion: 97,
        precio: 59.99,
        multijugador: true
    },
    {
        id: 2,
        nombre: "A Plague Tale Innocence",
        consola: "playstation 4",
        genero: ["accion", "aventura"],
        year: 2019,
        imagen: "https://c4.wallpaperflare.com/wallpaper/581/28/1024/video-games-playstation-4-a-plague-tale-innocence-hd-wallpaper-preview.jpg",
        descripcion: "La historia sigue a Amicia y a su hermano pequeño Hugo, quienes intentan sobrevivir en un mundo cruel y brutal asolado por la guerra y la Peste Negra.",
        desarrollador: "Asobo Studio",
        puntuacion: 81,
        precio: 69.99,
        multijugador: false
    },
    {
        id: 3,
        nombre: "A Way Out",
        consola: "playstation 4",
        genero: ["accion", "aventura"],
        year: 2018,
        imagen: "https://c4.wallpaperflare.com/wallpaper/856/462/334/video-game-a-way-out-wallpaper-preview.jpg",
        descripcion: " La historia sigue a Leo y Vincent, dos convictos que unen fuerzas a regañadientes para escapar de la cárcel y recobrar su libertad.",
        desarrollador: "Hazelight Studios",
        puntuacion: 85,
        precio: 59.99,
        multijugador: true
    },
    {
        id: 4,
        nombre: "ARK Survival Evolved",
        consola: "playstation 4",
        genero: ["rpg", "accion", "survival"],
        year: 2017,
        imagen: "https://c4.wallpaperflare.com/wallpaper/343/792/921/video-game-ark-survival-evolved-ark-survival-evolved-battle-dinosaur-hd-wallpaper-preview.jpg",
        descripcion: "ARK: Survival Evolved es un videojuego de acción y aventura en el que los jugadores deben sobrevivir en un mundo lleno de dinosaurios y otros animales prehistóricos, además de entes tecnológicos altamente desarrollados.",
        desarrollador: "Studio Wildcard",
        puntuacion: 86,
        precio: 49.99,
        multijugador: true
    },
    {
        id: 5,
        nombre: "Armored Core VI Fires of Rubicon",
        consola: "playstation 4",
        genero: ["accion", "aventura"],
        year: 2024,
        imagen: "https://wallpapercave.com/wp/wp12738869.jpg",
        descripcion: "Armored Core VI: Fires of Rubicon es un videojuego de combate vehicular basado en mechas en el cual los jugadores pilotan mechs llamados Armored Cores, que pueden personalizarse utilizando piezas para mejorar y afinar su poder.",
        desarrollador: "FromSoftware",
        puntuacion: 85,
        precio: 49.99,
        multijugador: false
    },
    {
        id: 6,
        nombre: "Assassins Creed 3 Remastered",
        consola: "playstation 4",
        genero: ["rpg", "accion", "aventura"],
        year: 2019,
        imagen: "https://wallpapercave.com/dwp2x/wp12083860.jpg",
        descripcion: "Assassin's Creed III Remastered es una versión mejorada del videojuego original lanzado en 2012, que ahora incluye mejoras visuales y jugables. La historia se desarrolla entre los años 1754 y 1783, durante la Revolución Estadounidense, y sigue a Connor Kenway, un nuevo ancestro que lucha contra los Templarios.",
        desarrollador: "Ubisoft",
        puntuacion: 90,
        precio: 59.99,
        multijugador: false
    },
    {
        id: 7,
        nombre: "Assassins Creed 4 Black Flag Gold Edition",
        consola: "playstation 4",
        genero: ["rpg", "accion", "aventura"],
        year: 2014,
        imagen: "https://wallpapercave.com/dwp2x/wp1901960.jpg",
        descripcion: "Assassin's Creed IV: Black Flag es un videojuego de acción y aventura en el que los jugadores asumen el papel de Edward Kenway, un pirata que se convierte en un asesino.",
        desarrollador: "Ubisoft",
        puntuacion: 92 ,
        precio: 59.99,
        multijugador: false
    },
    {
        id: 8,
        nombre: "Assassins Creed Mirage",
        consola: "playstation 4",
        genero: ["rpg", "accion", "aventura"],
        year: 2023,
        imagen: "https://imgs.search.brave.com/mAq6HbvqibUin0WPIMy4adWV04sj1BTDSjv2JQAqV6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMzAw/NTI1LmpwZw",
        descripcion: "Assassin's Creed Mirage es un videojuego de acción y aventura en el que los jugadores asumen el papel de Basim, un asesino que se convierte en un asesino.",
        desarrollador: "Ubisoft",
        puntuacion: 96,
        precio: 59.99,
        multijugador: false
    },
    {
        id: 9,
        nombre: "Assassins Creed Odyssey",
        consola: "playstation 4",
        genero: ["rpg", "accion", "aventura"],
        year: 2018,
        imagen: "https://wallpapercave.com/dwp2x/wp3109611.jpg",
        descripcion: "Assassin's Creed Odyssey es un videojuego de acción y aventura en el que los jugadores asumen el papel de Alexios o Kassandra, un mercenario que lucha en ambos bandos de la guerra mientras intenta encontrar a su familia y eliminar la misteriosa organización llamada Culto de Kosmos.",
        desarrollador: "Ubisoft",
        puntuacion: 97,
        precio: 59.99,
        multijugador: false
    },
    {
        id: 10,
        nombre: "Super Mario Odyssey",
        consola: "nintendo",
        genero: ["plataformas", "aventura"],
        year: 2017,
        imagen: "https://images.unsplash.com/photo-1531594652722-322307b2a22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        descripcion: "Acompaña a Mario en una aventura épica en 3D por todo el mundo, usando sus nuevas habilidades para recoger lunas y desbloquear nuevos y emocionantes lugares.",
        desarrollador: "Nintendo",
        puntuacion: 97,
        precio: 59.99,
        multijugador: false
    },
    {
        id: 11,
        nombre: "Horizon Forbidden West",
        consola: "playstation 4",
        genero: ["accion", "rpg", "aventura"],
        year: 2022,
        imagen: "https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        descripcion: "Aloy se aventura en el Oeste Prohibido, una frontera majestuosa pero peligrosa que oculta nuevas y misteriosas amenazas.",
        desarrollador: "Guerrilla Games",
        puntuacion: 88,
        precio: 69.99,
        multijugador: false
    },
    {
        id: 12,
        nombre: "Red Dead Redemption 2",
        consola: "xbox",
        genero: ["accion", "aventura"],
        year: 2018,
        imagen: "https://images.unsplash.com/photo-1516900448138-fc1826cab4dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        descripcion: "América, 1899. El fin de la era del Salvaje Oeste ha comenzado. Sigue la historia de Arthur Morgan y la banda de Van der Linde mientras luchan por sobrevivir.",
        desarrollador: "Rockstar Games",
        puntuacion: 97,
        precio: 39.99,
        multijugador: true
    }
]; 

async function obtenerPuntuacionOpenCritic(nombreJuego) {
    try {
        const formattedName = nombreJuego.toLowerCase()
            .replace(/ /g, "-")
            .replace(/[:']/g, "");
        
        const response = await fetch(
            `https://api.opencritic.com/api/game/${formattedName}`
        );
        
        if (!response.ok) return null;
        
        const data = await response.json();
        return data?.medianScore || null;
        
    } catch (error) {
        console.error(`Error en ${nombreJuego}:`, error.message);
        return null;
    }
}

async function actualizarPuntuaciones() {
    try {
        const actualizaciones = await Promise.allSettled(
            juegos.map(async juego => {
                const nueva = await obtenerPuntuacionOpenCritic(juego.nombre);
                return { ...juego, puntuacionActualizada: nueva };
            })
        );
        return actualizaciones.map(result => result.status === 'fulfilled' ? result.value : result.reason);
    } catch (error) {
        console.error("Error actualizando:", error);
        return juegos;
    }
}