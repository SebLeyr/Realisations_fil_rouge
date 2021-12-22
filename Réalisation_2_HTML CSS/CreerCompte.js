//récupérer la page de connexion
var crea = document.getElementById("creaCompte");

//récupérer le bouton d'ouverture de la page
var open = document.getElementById("creaCpt");

//récupérer le bouton de fermeture de la page
var iframe = crea.contentDocument || crea.contentWindow.document;
var close = iframe.getElementById("close");

//ouverture de la page avec le bouton
open.addEventListener("click", function() {
    crea.style.display = "block";
})

//fermeture de la page avec le bouton
close.addEventListener("click", function() {
    crea.style.display = "none";
})

//fermeture de la page avec le background
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})