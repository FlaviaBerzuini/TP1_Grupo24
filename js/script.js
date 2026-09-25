// Contacto
const modal = document.getElementById('modal-contacto');
const btnAbrirMenu = document.getElementById('abrir-contacto-menu');
const btnAbrirCasilla = document.getElementById('abrir-contacto-casilla');
const btnCerrar = document.getElementById('cerrar-modal');

function abrirModal(evento) {
    evento.preventDefault();
    modal.classList.add('activo');
}

function cerrarModal() {
    modal.classList.remove('activo');
}

btnAbrirMenu.addEventListener('click', abrirModal);
btnAbrirCasilla.addEventListener('click', abrirModal);
btnCerrar.addEventListener('click', cerrarModal);

window.addEventListener('click', function(evento) {
    if (evento.target === modal) {
        cerrarModal();
    }
});