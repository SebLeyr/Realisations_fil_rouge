//récupérer la page de connexion
var crea = RottenPotatoAccueil.getElementById("creaCompte");

//récupérer le bouton d'ouverture de la page
var open = RottenPotatoAccueil.getElementByClassName("creaCpt");

//récupérer le bouton de fermeture de la page
var close = RottenPotatoAccueil.getElementById("close");

//ouverture de la page avec le bouton
open.onclick = function() {
    crea.style.display = "block";
}

//fermeture de la page avec le bouton
close.onclick = function() {
    crea.style.display = "none";
}

//fermeture de la page avec le background
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}