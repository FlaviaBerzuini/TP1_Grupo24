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

    if (btnAbrirMenu) {
        btnAbrirMenu.addEventListener('click', abrirModal);
    }

    if (btnAbrirCasilla) {
        btnAbrirCasilla.addEventListener('click', abrirModal);
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarModal);
    }

    window.addEventListener('click', function(evento) {
        if (evento.target === modal) {
            cerrarModal();
        }
    });
}


// 2. Interactividad de la tarjeta
// Voltear tarjeta y revelar/ocultar jugador

const tarjetaPerfil = document.getElementById('tarjeta-perfil');
const btnRevelar = document.getElementById('btn-revelar');
const imagenPerfil = document.getElementById('imagen-perfil');


// Mapeo: ícono -> avatar
const MAPA_JUGADORES = {
    'perro.png': 'avatar-brian.png',
    'sombrero.png': 'avatar-flavia.png',
    'auto.png': 'avatar-pedro.png',
    'dedal.png': 'avatar-ludmila.png'
};


// Mapeo inverso: avatar -> ícono
const MAPA_INVERSO = Object.fromEntries(
    Object.entries(MAPA_JUGADORES).map(
        ([icono, avatar]) => [avatar, icono]
    )
);


if (tarjetaPerfil) {

    // Función 1: Girar la tarjeta
    // No se gira cuando el clic ocurre dentro del botón de revelar
    tarjetaPerfil.addEventListener('click', function(evento) {
        if (!btnRevelar || !btnRevelar.contains(evento.target)) {
            const tarjetaInner = this.querySelector('.tarjeta-inner');

            if (tarjetaInner) {
                tarjetaInner.classList.toggle('girada');
            }
        }
    });


    // Función 2: Revelar / ocultar jugador
    if (btnRevelar && imagenPerfil) {
        btnRevelar.addEventListener('click', function() {

            // Obtener solamente el nombre del archivo actual
            const archivoActual = imagenPerfil.src.split('/').pop();


            // Si actualmente se muestra un ícono,
            // cambiarlo por el avatar correspondiente
            if (MAPA_JUGADORES[archivoActual]) {

                const avatar = MAPA_JUGADORES[archivoActual];

                imagenPerfil.src = `img/${avatar}`;
                btnRevelar.textContent = 'Ocultar Jugador';


            // Si actualmente se muestra un avatar,
            // volver al ícono correspondiente
            } else if (MAPA_INVERSO[archivoActual]) {

                const icono = MAPA_INVERSO[archivoActual];

                imagenPerfil.src = `img/${icono}`;
                btnRevelar.textContent = 'Revelar Jugador';
            }
        });
    }
}

// 3. Bitácora - Expandir/contraer entradas
const entradasEncabezados = document.querySelectorAll('.entrada-encabezado');

entradasEncabezados.forEach(encabezado => {
    encabezado.addEventListener('click', function() {
        const entrada = this.closest('.entrada-bitacora');
        entrada.classList.toggle('expandida');
    });
});

// Permitir que el botón de expandir también funcione
const botonesExpandir = document.querySelectorAll('.btn-expandir');

botonesExpandir.forEach(boton => {
    boton.addEventListener('click', function(evento) {
        evento.stopPropagation();
        const entrada = this.closest('.entrada-bitacora');
        entrada.classList.toggle('expandida');
    });
});