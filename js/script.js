// 1. Contacto (Solo en index.html)
const modal = document.getElementById('modal-contacto');
const btnAbrirMenu = document.getElementById('abrir-contacto-menu');
const btnAbrirCasilla = document.getElementById('abrir-contacto-casilla');
const btnCerrar = document.getElementById('cerrar-modal');

if (modal) { 
    function abrirModal(evento) {
        evento.preventDefault(); 
        modal.classList.add('activo');
    }

    function cerrarModal() {
        modal.classList.remove('activo');
    }

    if (btnAbrirMenu) btnAbrirMenu.addEventListener('click', abrirModal);
    if (btnAbrirCasilla) btnAbrirCasilla.addEventListener('click', abrirModal);
    if (btnCerrar) btnCerrar.addEventListener('click', cerrarModal);

    window.addEventListener('click', function(evento) {
        if (evento.target === modal) {
            cerrarModal();
        }
    });
}

// 2. Intereactividad tarjetas (voltear tarjeta y revelar Foto)
const tarjetaPerfil = document.getElementById('tarjeta-perfil');
const btnRevelar = document.getElementById('btn-revelar');
const imagenPerfil = document.getElementById('imagen-perfil');

// Diccionario de mapeo: Relación 1 a 1 entre el archivo del ícono y el del avatar
const MAPA_JUGADORES = {
    'perro.png': 'avatar-brian.png',
    'sombrero.png': 'avatar-flavia.png',
    // Si agregas más jugadores en el futuro, súmalos acá. Ej:
    // 'bigote.png': 'avatar_carlos.png'
};

// Diccionario inverso: Se genera solo para saber a qué ícono volver
const MAPA_INVERSO = Object.fromEntries(
    Object.entries(MAPA_JUGADORES).map(([icono, avatar]) => [avatar, icono])
);

if (tarjetaPerfil) { 
    
    // Función 1: Girar la tarjeta (excepto si tocan el botón)
    tarjetaPerfil.addEventListener('click', function(evento) {
        // Si el clic NO fue en el botón de revelar, giramos la tarjeta
        if (evento.target !== btnRevelar) {
            const tarjetaInner = this.querySelector('.tarjeta-inner');
            tarjetaInner.classList.toggle('girada');
        }
    });

    // Función 2: Revelar jugador usando objeto de mapeo
    if (btnRevelar && imagenPerfil) {
        btnRevelar.addEventListener('click', function() {
            // Extraemos solo el nombre del archivo de la ruta actual
            const archivoActual = imagenPerfil.src.split('/').pop();

            if (MAPA_JUGADORES[archivoActual]) {
                // Si es un ícono conocido, revelamos su avatar
                const avatar = MAPA_JUGADORES[archivoActual];
                imagenPerfil.src = `img/${avatar}`;
                btnRevelar.textContent = 'Ocultar Jugador';
                
            } else if (MAPA_INVERSO[archivoActual]) {
                // Si es un avatar conocido, lo volvemos a ocultar con su ícono
                const icono = MAPA_INVERSO[archivoActual];
                imagenPerfil.src = `img/${icono}`;
                btnRevelar.textContent = 'Revelar Jugador';
            }
        });
    }
}