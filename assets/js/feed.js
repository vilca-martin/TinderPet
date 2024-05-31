document.getElementById("toggleDetail").addEventListener("click", function () {
    var textDetail = document.querySelector(".text_detail");
    textDetail.classList.toggle("show"); // Alternar la clase 'show' en el párrafo
  });
  
  var button = document.getElementById("toggleMatch");
  var counterElement = document.getElementById("counter");
  var counterContainer = document.getElementById("notificacionFlotante");
  var counter = 0;
  var add = true; // Variable para alternar entre sumar y restar
  
  button.addEventListener("click", function () {
    button.classList.toggle("color-match"); // Agrega o quita la clase 'color-match'
  
    if (add) {
      counter++;
    } else {
      counter--;
    }
  
    counterElement.textContent = counter;
    counterContainer.textContent = counter; // Actualiza el contenido del div counterContainer
  
    add = !add; // Alterna entre sumar y restar
    console.log(counter); 
  });
  