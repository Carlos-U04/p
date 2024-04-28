document.addEventListener("DOMContentLoaded", function() {
    const gallery1Images = document.querySelectorAll(".gallery1 img");
    const galleryLImages = document.querySelectorAll(".galleryL img");
    let index1 = 0;
    let indexL = 0;

    function showNextImage() {
        // Ocultar todas las imágenes de la galería 1
        gallery1Images.forEach(img => img.classList.remove('active'));
        // Muestra la siguiente imagen de la galería 1
        gallery1Images[index1].classList.add('active');
        // Calcular el índice de la siguiente imagen para la galería 1
        index1 = (index1 + 1) % gallery1Images.length;

        // Ocultar todas las imágenes de la galería L
        galleryLImages.forEach(img => img.classList.remove('active'));
        // Muestra la siguiente imagen de la galería L
        galleryLImages[indexL].classList.add('active');
        // Calcular el índice de la siguiente imagen para la galería L
        indexL = (indexL + 1) % galleryLImages.length;
    }

    // Mostrar la primera imagen inicialmente en ambas galerías
    showNextImage();

    // Cambiar a la siguiente imagen cada 4 segundos
    setInterval(showNextImage, 4000);
});



document.getElementById('toggleButton').addEventListener('click', function() {
    var linkContainer = document.getElementById('linkContainer');
    linkContainer.style.display = (linkContainer.style.display === 'none' || linkContainer.style.display === '') ? 'block' : 'none';
});
