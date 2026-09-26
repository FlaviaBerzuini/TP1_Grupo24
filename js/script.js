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
    const mensajeDados = document.getElementById('mensaje-dados');

    // Esto es para que no se vaya para cualquier lado las casillas. Sino se puede modifcar en el html para que quede en orden 
    const ordenRecorrido = [
        '.esquina-sup-izq',  // 0: SALIDA
        '.col-2',            // 1: HTML5
        '.col-3',            // 2: CSS3
        '.col-4',            // 3: GIT
        '.col-5',            // 4: GITHUB
        '.esquina-sup-der',  // 5: DE VISITA NADA MÁS (Bitácora)
        '.fila2-col6',       // 6: NODE.JS
        '.fila3-col6',       // 7: EXPRESS
        '.fila4-col6',       // 8: ENERGÍA
        '.fila5-col6',       // 9: AWS
        '.esquina-inf-der',  // 10: PARADA LIBRE (Equipo)
        '.fila6-col5',       // 11: JAVASCRIPT
        '.fila6-col4',       // 12: REACT
        '.fila6-col3',       // 13: AGUA
        '.fila6-col2',       // 14: SQL
        '.esquina-inf-izq',  // 15: VÁYASE A LA CÁRCEL (Contacto)
        '.fila5-col1',       // 16: KOTLIN
        '.fila4-col1',       // 17: FIGMA
        '.fila3-col1',       // 18: IMPUESTO
        '.fila2-col1'        // 19: ANDROID
    ];

    // Posición inicial (Índice 0 = SALIDA)
    let casillaActualIndex = 0;

    if (btnDados) {
        btnDados.addEventListener('click', () => {
            btnDados.disabled = true;

            
            const dado1 = Math.floor(Math.random() * 6) + 1;
            const dado2 = Math.floor(Math.random() * 6) + 1;
            const sumaDados = dado1 + dado2;

        
            imgDados.classList.add('animar-dados');
            if (mensajeDados) {
                mensajeDados.textContent = `🎲 Lanzando dados...`;
            }

            
            document.querySelectorAll('.casilla').forEach(c => c.classList.remove('casilla-seleccionada'));

            setTimeout(() => {
                imgDados.classList.remove('animar-dados');

               
                casillaActualIndex = (casillaActualIndex + sumaDados) % ordenRecorrido.length;
                
                
                const selectorCasilla = ordenRecorrido[casillaActualIndex];
                const casillaElegida = document.querySelector(selectorCasilla);

                if (casillaElegida) {
                    casillaElegida.classList.add('casilla-seleccionada');

                
                    const nombreCasilla = casillaElegida.querySelector('strong')?.innerText.replace(/\n/g, ' ') || 'Casilla';

                    if (mensajeDados) {
                        mensajeDados.innerHTML = `Sacaste <strong>${dado1}</strong> + <strong>${dado2}</strong> = <strong>${sumaDados}</strong>.<br>Avanzaste ${sumaDados} posiciones hasta <strong>${nombreCasilla}</strong>.`;
                    }

                    
                    setTimeout(() => {
                        btnDados.disabled = false;

                        if (casillaElegida.tagName.toLowerCase() === 'a') {
                            if (casillaElegida.id === 'abrir-contacto-casilla') {
                                const modal = document.getElementById('modal-contacto');
                                if (modal) modal.classList.add('activo');
                            } else {
                                casillaElegida.click();
                            }
                        }
                    }, 2000);
                }

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