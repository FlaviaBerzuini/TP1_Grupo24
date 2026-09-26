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

// 2. Interactividad tarjetas (voltear tarjeta y revelar)
const tarjetaPerfil = document.getElementById('tarjeta-perfil');
const btnRevelar = document.getElementById('btn-revelar');
const imagenPerfil = document.getElementById('imagen-perfil');

if (tarjetaPerfil) { 
    
    // Función 1: Girar la tarjeta (excepto si tocan el botón)
    tarjetaPerfil.addEventListener('click', function(evento) {
        if (evento.target !== btnRevelar) {
            const tarjetaInner = this.querySelector('.tarjeta-inner');
            tarjetaInner.classList.toggle('girada');
        }
    });

    // Función 2: Revelar jugador
    // Diccionario de correspondencia directa
    const mapaJugadores = {
        'sombrero.png': 'avatar-flavia.png',
        'auto.png': 'avatar-pedro.png',
        'perro.png': 'avatar-brian.png',
        'dedal.png': 'avatar-ludmila.png'
    };

    // Mapeo inverso generado automáticamente (avatar -> ícono)
    const mapaInverso = Object.fromEntries(
        Object.entries(mapaJugadores).map(([icono, avatar]) => [avatar, icono])
    );

    // Se verifica la existencia de los elementos antes de adjuntar el evento
    if (btnRevelar && imagenPerfil) {
        btnRevelar.addEventListener('click', function() {
            const archivoActual = imagenPerfil.src.split('/').pop();
            
            // Si la imagen actual es un ícono, se sustituye por su avatar
            if (mapaJugadores[archivoActual]) {
                const avatar = mapaJugadores[archivoActual];
                imagenPerfil.src = `img/${avatar}`;
                btnRevelar.textContent = 'Ocultar Jugador';

            // Si la imagen actual es un avatar, se restaura el ícono original
            } else if (mapaInverso[archivoActual]) {
                const icono = mapaInverso[archivoActual];
                imagenPerfil.src = `img/${icono}`;
                btnRevelar.textContent = 'Revelar Jugador';
            }
        });
    }
}

// 3. Lógica de dados y casillas del tablero
document.addEventListener('DOMContentLoaded', () => {
    const btnDados = document.getElementById('btn-dados');
    const imgDados = document.querySelector('.dados-imagen');
    const casillas = document.querySelectorAll('.casilla');

    if(btnDados) {
        btnDados.addEventListener('click', () => {
            
            // 1. Animamos los dados
            imgDados.classList.add('animar-dados');
            
            // 2. Limpiamos selecciones anteriores
            casillas.forEach(casilla => casilla.classList.remove('casilla-seleccionada'));

            // 3. Esperamos que termine de agitarse (500ms)
            setTimeout(() => {
                imgDados.classList.remove('animar-dados');

                // Elegimos la casilla al azar
                const indiceAleatorio = Math.floor(Math.random() * casillas.length);
                const casillaElegida = casillas[indiceAleatorio];

                // Iluminamos la casilla
                casillaElegida.classList.add('casilla-seleccionada');
                
                // Esperamos 1.2 segundos
                setTimeout(() => {
                    if (casillaElegida.tagName.toLowerCase() === 'a') {
                        // Verificamos si la casilla ganadora es la de contacto/cárcel
                        if (casillaElegida.id === 'abrir-contacto-casilla') {
                            const modal = document.getElementById('modal-contacto');
                            if (modal) modal.classList.add('activo');
                        } else {
                            // Para cualquier otra casilla con enlace (Bitácora, Equipo), navega normal
                            casillaElegida.click(); 
                        }
                    } else {
                        console.log("Caíste en una tecnología: " + casillaElegida.innerText);
                    }
                }, 1200);
                
            }, 500); 
        });
    }
});

// 4. Simular envío del formulario policial
document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.querySelector('.btn-enviar');
    
    if (btnEnviar) {
        btnEnviar.addEventListener('click', (evento) => {
            evento.preventDefault();
            // Mostramos un mensaje de éxito
            alert("¡Declaración registrada en el expediente de Devopoly con éxito!");

            // Cerramos automáticamente después de enviar
            const modal = document.getElementById('modal-contacto');
            if (modal) {
                modal.classList.remove('activo');
            }
            
            //Limpiar los campos de texto
            const inputs = document.querySelectorAll('.formulario-policial input, .formulario-policial textarea');
            inputs.forEach(input => input.value = '');
        });
    }
});

// 5. Intereactividad de la Bitácora
document.addEventListener('DOMContentLoaded', () => {
    const botonesExpandir = document.querySelectorAll('.btn-expandir');
    
    botonesExpandir.forEach(boton => {
        boton.addEventListener('click', function() {
            const entrada = this.closest('.entrada-bitacora');
            
            entrada.classList.toggle('expandida');
          
            if (entrada.classList.contains('expandida')) {
                this.textContent = '▲';
            } else {
                this.textContent = '▼';
            }
        });
    });
});