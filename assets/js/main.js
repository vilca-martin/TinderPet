// Espera a que se cargue completamente el DOM
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento carousel
    var carouselElement = document.querySelector('.carousel');

    // Verificar si se encontró el elemento
    if(carouselElement) {
        // Activar el carousel automáticamente
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000 // intervalo en milisegundos (por defecto es 5000)
        });
    }

    
});

// Función para ocultar el spinner cuando la página haya terminado de cargar
function hideSpinnerOnLoad() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loading').style.display = 'none';
    });
  }
  
// Llama a la función para ocultar el spinner cuando la página haya terminado de cargar
hideSpinnerOnLoad();