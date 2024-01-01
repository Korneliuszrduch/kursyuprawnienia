// ... (wcześniejszy kod) ...

// Funkcja pokazująca popup
function showPopup() {
    
    var popup = document.querySelector(".popup");
    var overlay = document.querySelector("overlay");

    // Pobierz rozmiary okna przeglądarki
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Ustaw rozmiary popupa na rozmiary okna
    popup.style.width = windowWidth + 'px';
    popup.style.height = windowHeight + 'px';

    popup.style.display = "block";
    overlay.style.display = "block";
}

// Funkcja zamykająca popup
function closePopup() {
    var popup = document.querySelector(".popup");
    var overlay = document.querySelector("overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
}

// ... (wcześniejszy kod) ...
