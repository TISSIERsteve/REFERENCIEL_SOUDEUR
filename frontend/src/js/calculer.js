//* FONCTION CALCULER *//

// Import de mes fichiers
const afficherTableauResultats = require("./afficherTableauResultats");
const rechercher = require("./rechercher");

// Récupérer le bouton de calcul
const calculerButton = document.querySelector("button");

// Ajouter un écouteur d'événements pour le clic
calculerButton.addEventListener("click", function () {
	calculer();
});

function calculer() {
	// Vérifier si tous les champs sont remplis
	var champsRemplis = true;
	var champsRequis = [
		"typeSoudure",
		"typeMateriau",
		"epaisseur",
		"diametreElectrode",
		"typeElectrode",
		"diametreFil",
		"diametreFilMAG",
		"diametreTungstene",
		"metalApport",
		"positionSoudure",
		"typeCourant",
	];

	console.log(champsRequis);

	// Si tous les champs ne sont pas remplis, return
	champsRequis.forEach(function (champ) {
		if (document.getElementById(champ).value === "") {
			champsRemplis = false;
			return;
		}
	});

	// Si tous les champs sont remplis, procéder au calcul
	if (champsRemplis) {
		// Rechercher les options pertinentes dans la base de données
		var optionsTrouvees = rechercher();

		if (optionsTrouvees) {
			// Récupérer les valeurs des autres champs
			var typeSoudure = document.getElementById("typeSoudure").value;
			var typeMateriau = document.getElementById("typeMateriau").value;
			var epaisseur = document.getElementById("epaisseur").value;
			var diametreElectrode =
				document.getElementById("diametreElectrode").value;
			var typeElectrode = document.getElementById("typeElectrode").value;
			var diametreFil = document.getElementById("diametreFil").value;
			var diametreFilMAG = document.getElementById("diametreFilMAG").value;
			var diametreTungstene =
				document.getElementById("diametreTungstene").value;
			var metalApport = document.getElementById("metalApport").value;
			var positionSoudure = document.getElementById("positionSoudure").value;
			var typeCourant = document.getElementById("typeCourant").value;

			// Créer un tableau avec les valeurs récupérées

			//* J AI RAJOUTER .VALUE POUR EFFACER LES CHAMPS NON REMPLIS
			var tableauResultats = [
				["Type de Soudure", typeSoudure],
				["Type de Matériau", typeMateriau],
				["Épaisseur du Matériau (mm)", epaisseur],
				["Diamètre de la Baguette (mm)", diametreElectrode],
				["Type de Baguette", typeElectrode],
				["Diamètre du Fil (mm)", diametreFil.value],
				["Diamètre du Fil MAG (mm)", diametreFilMAG.value],
				["Diamètre du Tungstène (mm)", diametreTungstene.value],
				["Métal d'Apport", metalApport.value],
				["Position de la Soudure", positionSoudure],
				["Type de Courant", typeCourant],
			];

			// Extraire les valeurs d'intensité, d'amperage et de vitesse de fil
			var amperage = optionsTrouvees.amperage;
			var intensite = optionsTrouvees.intensite;
			var vitesseFil = optionsTrouvees.vitesseFil;

			// Afficher le tableau dans la page HTML avec les valeurs d'intensité, d'amperage et de vitesse de fil
			afficherTableauResultats(
				tableauResultats,
				amperage,
				intensite,
				vitesseFil,
			);
		} else {
			alert(
				"Les options sélectionnées ne sont pas disponibles dans la base de données.",
			);
		}
	} else {
		alert("Veuillez remplir tous les champs avant de procéder au calcul.");
	}
}

module.exports = calculer;
