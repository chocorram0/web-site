document.addEventListener("DOMContentLoaded", function() {
    const episodios = [
        "Episodio 1: El encuentro",
        "Episodio 2: Nuevas vidas",
        "Episodio 3: La banda",
        // Agrega más episodios aquí
    ];

    const listaEpisodios = document.getElementById('episodios-lista');
    episodios.forEach(episodio => {
        const li = document.createElement('li');
        li.textContent = episodio;
        listaEpisodios.appendChild(li);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const episodios = [
        "Episodio 1: El encuentro",
        "Episodio 2: Nuevas vidas",
        "Episodio 3: La banda",
        // Agrega más episodios aquí
    ];

    const listaEpisodios = document.getElementById('episodios-lista');
    episodios.forEach(episodio => {
        const li = document.createElement('li');
        li.textContent = episodio;
        listaEpisodios.appendChild(li);
    });

    const circulos = document.querySelectorAll('.circulo');
    const imagenPersonaje = document.getElementById('imagen-personaje');

    circulos.forEach(circulo => {
        circulo.addEventListener('click', function() {
            const imagen = this.getAttribute('data-imagen');
            imagenPersonaje.src = imagen;
            imagenPersonaje.style.display = 'block'; // Muestra la imagen
        });
    });
});


//flecha

function smoothScroll(event, targetId) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
}


//

const circulos = document.querySelectorAll('.circulo');

circulos.forEach(circulo => {
    circulo.addEventListener('mouseenter', () => {
        circulo.classList.add('borde-brillante');
        circulos.forEach(c => {
            if (c !== circulo) {
                c.classList.add('no-activo');
            }
        });
    });

    circulo.addEventListener('mouseleave', () => {
        circulo.classList.remove('borde-brillante');
        circulos.forEach(c => {
            c.classList.remove('no-activo');
        });
    });

    circulo.addEventListener('click', () => {
        const imagenSrc = circulo.dataset.imagen;
        const imagen = document.getElementById('imagen-personaje');
        const info = document.getElementById('info-personaje');
        imagen.src = imagenSrc;
        imagen.style.display = 'block'; // Muestra la imagen
        info.textContent = circulo.dataset.info; // Muestra la información del personaje
        info.style.display = 'block'; // Muestra la información
    });
});