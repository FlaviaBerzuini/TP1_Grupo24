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

if (tarjetaPerfil) { 
    
    // Función 1: Girar la tarjeta (excepto si tocan el botón)
    tarjetaPerfil.addEventListener('click', function(evento) {
        // Si el clic NO fue en el botón de revelar, giramos la tarjeta
        if (evento.target !== btnRevelar) {
            const tarjetaInner = this.querySelector('.tarjeta-inner');
            tarjetaInner.classList.toggle('girada');
        }
    });

    // Función 2: Revelar jugador
    if (btnRevelar && imagenPerfil) {
        btnRevelar.addEventListener('click', function() {
            if (imagenPerfil.src.includes('sombrero')) {
                imagenPerfil.src = 'img/avatar-flavia.png';
                btnRevelar.textContent = 'Ocultar Jugador';
            } else {
                imagenPerfil.src = 'img/sombrero.png';
                btnRevelar.textContent = 'Revelar Jugador';
            }
        });
    }
}