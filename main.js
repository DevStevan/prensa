const hamburger = document.querySelector(".menu-hamburger");
const navlinks = document.querySelector(".nav-links");
const closeButton = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
})

closeButton.addEventListener('click', () => {
    navlinks.classList.remove('active');
    hamburger.classList.remove('active');
});


document.getElementById('mostrar-cv').addEventListener('click', function() {
    // Verifica si la imagen ya está cargada
    let cvContainer = document.getElementById('cv-container');
    let cvImage = cvContainer.querySelector('img');

    if (!cvImage) {
        // Si no existe la imagen aún, la creamos y la añadimos al contenedor
        let img = document.createElement('img');
        img.src = 'img/curriculum.jpeg'; // Cambia esta ruta a donde tienes guardada la imagen de tu CV
        img.alt = 'Currículum de Juan Esteban';
        cvContainer.appendChild(img);

        // Mostrar la imagen
        img.style.display = 'block';
    } else {
        // Si la imagen ya está cargada, solo la mostramos
        cvImage.style.display = 'block';
    }
});
