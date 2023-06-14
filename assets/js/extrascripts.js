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