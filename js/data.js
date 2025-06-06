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
        year: 2022,
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
        consola: "Playstation 4",
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
        nombre: "Assassins Creed Origins",
        consola: "playstation 4",
        genero: ["rpg", "accion", "aventura"],
        year: 2017,
        imagen: "https://c4.wallpaperflare.com/wallpaper/635/961/217/4k-8k-egypt-assassins-creed-origins-wallpaper-preview.jpg",
        descripcion: "La historia se centra en Bayek, un Medjay que se convierte en el fundador de la Hermandad de Asesinos después de un incidente que involucra el secuestro de su hijo Khemu y un Fruto del Edén inactivo.",
        desarrollador: "Ubisoft",
        puntuacion: 97,
        precio: 59.99,
        multijugador: false
    },
    {
       
        id: 11,

        nombre: "Assassins Creed Syndicate",
        consola: "playstation 4",
        genero: ["accion", "rpg", "aventura"],
        year: 2015,
        imagen: "https://wallpapercave.com/dwp2x/wp9574619.jpg",
        descripcion: "El juego se desarrolla en la Inglaterra de la Revolución Industrial, donde los gemelos Jacob y Evie Frye luchan contra aquellos que se aprovechan de los menos privilegiados.",
        desarrollador: "Ubisoft",
        puntuacion: 95,
        precio: 59.99,
        multijugador: false
    },
    {
        id: 12,
        nombre: "Assassins Creed Unity",
        consola: "playstation 4",
        genero: ["accion", "aventura", "rpg"],
        year: 2014,
        imagen: "https://wallpapercave.com/dwp2x/wp1869821.jpg",
        descripcion: "El protagonista del juego es Arno Victor Dorian, quien nace en una casa noble en Versalles, Francia el 26 de agosto de 1768, como el único hijo de Charles y Marie Dorian.La trama principal se desarrolla en París, donde Arno se une a la Hermandad de los Asesinos para sembrar una semilla que no ha hecho más que empezar en la nueva generación.",
        desarrollador: "Ubisoft",
        puntuacion: 97,
        precio: 59.99,
        multijugador: true
    },
    {
        id: 13,
        nombre: "Assassins Creed Valhalla",
        consola: "playstation 4",
        genero: ["accion", "aventura", "rpg"],
        year: 2014,
        imagen: "https://wallpapercave.com/dwp2x/wp1869821.jpg",
        descripcion: "Assassin's Creed Unity es un videojuego de acción y aventura en el que los jugadores asumen el papel de Arno Dorian, un asesino que se convierte en un asesino.",
        desarrollador: "Ubisoft",
        puntuacion: 97,
        precio: 59.99,
        multijugador: true 
    },
    {
        id: 14,
        nombre: "Atomic Heart",
        consola: "playstation 4",
        genero: ["accion", "aventura", "rpg"],
        year: 2023,
        imagen: "https://imgs.search.brave.com/zHXSZFjq8Wi8C35wOY4sWj6_FjsDhjVMrfnu5EwRmho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy85NDQxODIt/YXRvbWljLWhlYXJ0/LmpwZw",
        descripcion: "El juego se desarrolla en una versión alternativa de la Unión Soviética durante la década de 1950, donde el rápido avance tecnológico y los experimentos secretos han dado lugar a criaturas mutantes, máquinas aterradoras y robots superpoderosos que han comenzado a rebelarse contra los humanos.",
        desarrollador: "Manticore Games",
        puntuacion: 90,
        precio: 59.99,
        multijugador: true 
    
    
    
    







    }

]; 