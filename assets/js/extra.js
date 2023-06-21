// JavaScript code to change the button text
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
  if (button.innerHTML === '<i class="fas fa-language"></i>  EN-USA') {
    button.innerHTML = '<i class="fas fa-language"></i> PT-BR';
    changeLanguage('en');
    
  } else {
    button.innerHTML = '<i class="fas fa-language"></i>  EN-USA';
    changeLanguage('pt');
  }
});


function changeLanguage(language) {
    var elements = document.querySelectorAll("[data-lang]");

    elements.forEach(function (element) {
        var translation = element.getAttribute("data-lang");

        if (translation === language) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}