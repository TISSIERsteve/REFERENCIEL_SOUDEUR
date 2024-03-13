//* FONCTION BOUTTON REFRESH *//

function ajouterBoutonRefresh() {
	// Créer un bouton
	var bouton = document.createElement("button");

	// Ajouter une classe au bouton
	bouton.classList.add("boutonRefresh");

	bouton.textContent = "Nouvelle recherche";

	// Ajouter un gestionnaire d'événements pour le clic sur le bouton
	bouton.addEventListener("click", function () {
		maFonction();
	});

	// Ajouter le bouton au corps du document
	document.body.appendChild(bouton);
}

// La fonction à exécuter lorsque le bouton est cliqué
function maFonction() {
	if (window.confirm("Êtes-vous sûr de vouloir quitter la page ?")) {
		window.location.reload();
	} else {
		alert("Opération annulée !");
	}
}

module.exports = ajouterBoutonRefresh;
