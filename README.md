# TP1 | Devopoly

**Descripción:**

Este proyecto consiste en una aplicación web interactiva inspirada en el clásico juego de tablero **Monopoly**. Diseñada con una arquitectura basada en **HTML, CSS y JavaScript**, la plataforma combina una experiencia gráfica atractiva con funcionalidades dinámicas en tiempo real.

El proyecto se divide en dos secciones principales:

1. **Tablero Principal (Portada):** Un tablero de juego funcional que integra mecánicas interactivas como la tirada aleatoria de dados con animaciones CSS, resaltado dinámico de casillas seleccionadas, visualización de fichas de jugadores y un panel de instrucciones desplegable.

2. **Sección de Perfiles:** Una presentación temática de los integrantes del equipo estructurada mediante tarjetas de propiedad (*Flip Cards* 3D). Cada tarjeta permite alternar entre el frente y el reverso para revelar información detallada, avatares personalizados e interactividad mediante botones dinámicos.

3. **Formulario de Contacto:** Ubicado conceptualmente dentro de la casilla de la cárcel del tablero, este módulo despliega un formulario interactivo que sirve para un contacto directo. 

4. **Bitacora:** Panel que registra las decisiones tomadas a lo largo del proyecto con sus respectivas justificaciones y explicaciones. 

## Integrantes
* [Flavia Berzuini](https://github.com/FlaviaBerzuini)
* [Ludmila Quiroz](https://github.com/Ludmimquiroz)
* [Pedro Bustamante](https://github.com/peterbusta)
* [Brian Sabio](https://github.com/BrianSabio)

## Estructura del TP1
```text
TP1_Grupo24/
├── index.html
├── bitacora.html
├── brian.html
├── flavia.html
├── ludmila.html
├── pedro.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    └── imagenes y recursos graficos del proyecto
```

## Tecnologías y guía de estilos
* **Lenguajes:** html5, css3, javascript.
* **Tipografías:**

--Montserrat.

--Roboto.

* **paleta de colores:**

-- #1a252f — Fondo general del body y del perfil.

-- #2c3e50 — Gradiente del cuerpo, bloques de instrucciones y fondo secundario de la bitácora.

--#080b12 — Tono oscuro final del gradiente radial del cuerpo.

--#0b1118 — Fondo del menú superior y pie de página (footer).

--#e5e5d3 — Fondo base de la estructura del tablero.

--#d6e8df — Fondo verde claro del tablero, esquinas, tarjetas y el contenedor .tarjeta-tablero.

--#ffffff — Blanco (fondo de entradas de la bitácora, modal, tarjetas y elementos de navegación).

--#fafafa — Fondo gris muy claro para contenedores internos (.opcion-carta).

--#f4f1ea — Fondo crema para la tarjeta policial / modal.

--#fffde7 — Fondo crema/amarillento del mensaje de dados.

## Interactividad (javascript)
* **Portada:** 
[Portada](img/portada.png)

Descripción:
Es la página principal del proyecto. En esta interactuan el tablero con todos los demás elementos.

**Funciones dinámicas agregadas:**

--Simulación de dados: Al presionar el botón de interacción, se genera un número aleatorio, los dados ejecutan una animación de agitación (@keyframes agitar) y se actualiza el mensaje central con el resultado obtenido.

--Selección de casilla: El resultado de los dados destaca dinámicamente la casilla correspondiente en el tablero mediante un efecto de brillo y escalado (.casilla-seleccionada).

--Interacción con fichas: Al pasar el cursor (hover) sobre las fichas/peones de los jugadores en el centro del tablero, se despliega una animación suave que revela el nombre de cada integrante.

--Menú responsive: Un menú desplegable (hamburguesa) que se adapta automáticamente a dispositivos móviles.


* **Perfiles:** 

[Perfil](img/tarjeta_perfil_1.png)

-- Descripción:
Sección individual dedicada a presentar la información de cada integrante del equipo con la estética de las tarjetas de propiedad de Monopoly.

[Perfil 2](img/tarjeta_perfil_2.png)

-- Botón «Revelar Jugador»: Acción interactiva ubicada en la tarjeta que revela la imagen del avatar.


[Perfil 3](img/tarjeta_perfil_3.png)

--Giro 3D de la tarjeta (Flip Card): Rotación en el eje Y (rotateY(180deg)) al hacer clic en la tarjeta para alternar entre el frente y el reverso.

--Navegación interna: Mini-menú interactivo en el reverso con iconos SVG que cambian de estado y color al pasar el cursor.

## Uso de inteligencia artificial

Todas las herramientas mencionadas a continuación se utilizaron con **plan gratuito**.

### Gemini (Google)
* **Uso:** Asistencia técnica en la depuración de CSS, integración e interacción de JavaScript (lógica de dados).
* **Criterio:** Se utilizó como asistencia para corrección parcial del código, mejorando legibilidad y coherencia técnica. El equipo revisó y probó cada cambio antes de incorporarlo.

### ChatGPT (OpenAI)
* **Uso:** Generación de los avatares de los integrantes.
* **Criterio:** Se empleó mediante un prompt unificado aplicado a fotografías de referencia, logrando un estilo gráfico homogéneo y consistente para las imágenes de los cuatro integrantes.

### Claude (Anthropic)
* **Uso:** Asistencia como mentor técnico durante el desarrollo: apoyo conceptual sobre HTML, CSS y JavaScript, y redacción de la documentación de este README.
* **Criterio:** Se utilizó como guía de aprendizaje y de organización de la documentación y mentor para el análisis de código y depuración.

## Despliegue
* **URL de Vercel:** _Pendiente de publicación._ Se actualizará este campo con el enlace correspondiente antes de la entrega final.