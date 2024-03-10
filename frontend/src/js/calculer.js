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
	var champsRequis = ["typeSoudure", "typeMateriau", "epaisseur"];

	// Si le type de soudure est "arc", ajouter les champs de l'arc au tableau des champs requis
	if (document.getElementById("typeSoudure").value === "arc") {
		champsRequis.push("diametreElectrode");
		champsRequis.push("typeElectrode");

		// Si le type de soudure est "mig", ajouter le champ "diametreFil" aux champs requis
	} else if (document.getElementById("typeSoudure").value === "mig") {
		champsRequis.push("diametreFil");

		// Si le type de soudure est "mag", ajouter le champ "diametreFilMAG" aux champs requis
	} else if (document.getElementById("typeSoudure").value === "mag") {
		champsRequis.push("diametreFilMAG");
		champsRequis.push("typeFilMAG"); // Ajout pour options fil plein fil fourre

		// Si le type de soudure est "tig", ajouter les champs du tig au tableau des champs requis
	} else if (document.getElementById("typeSoudure").value === "tig") {
		champsRequis.push("diametreTungstene");
		champsRequis.push("metalApport");
	}

	// Si tous les champs ne sont pas remplis, afficher un message d'alerte et arrêter la fonction
	champsRequis.forEach(function (champ) {
		if (document.getElementById(champ).value === "") {
			champsRemplis = false;
			return;
		}
	});

	if (!champsRemplis) {
		alert("Veuillez remplir tous les champs avant de procéder au calcul.");
		return;
	}

	// Rechercher les options dans la base de données
	var optionsTrouvees = rechercher();

	if (optionsTrouvees) {
		console.log("optionstrouvees", optionsTrouvees);
		// Récupérer les valeurs des autres champs
		var typeSoudure = document.getElementById("typeSoudure").value;
		var typeMateriau = document.getElementById("typeMateriau").value;
		var epaisseur = document.getElementById("epaisseur").value;

		// Définir les variables spécifiques à chaque type de soudure
		var diametreElectrode,
			typeElectrode,
			diametreFil,
			diametreFilMAG,
			diametreTungstene,
			metalApport;

		// Assigner les valeurs spécifiques aux variables en fonction du type de soudure sélectionné

		//* ARC *//
		if (typeSoudure === "arc") {
			diametreElectrode = document.getElementById("diametreElectrode").value;
			typeElectrode = document.getElementById("typeElectrode").value;

			//*MIG
		} else if (typeSoudure === "mig") {
			diametreFil = document.getElementById("diametreFil").value;

			//*MAG
		} else if (typeSoudure === "mag") {
			diametreFilMAG = document.getElementById("diametreFilMAG").value;
			typeFilMAG = document.getElementById("typeFilMAG").value;

			//* TIG
		} else if (typeSoudure === "tig") {
			diametreTungstene = document.getElementById("diametreTungstene").value;
			metalApport = document.getElementById("metalApport").value;
		}

		// Tableau avec les valeurs récupérées
		var tableauResultats = [
			["Type de Soudure", typeSoudure],
			["Type de Matériau", typeMateriau],
			["Épaisseur du Matériau (mm)", epaisseur],
		];

		// Ajouter les valeurs spécifiques à chaque type de soudure dans le tableau de résultats
		if (typeSoudure === "arc") {
			tableauResultats.push([
				"Diamètre de la Baguette (mm)",
				diametreElectrode,
			]);
			tableauResultats.push(["Type de Baguette", typeElectrode]);
		} else if (typeSoudure === "mig") {
			tableauResultats.push(["Diamètre du Fil (mm)", diametreFil]);
		} else if (typeSoudure === "mag") {
			tableauResultats.push(["Diamètre du Fil MAG (mm)", diametreFilMAG]);
			tableauResultats.push(["Type de Fil MAG", typeFilMAG]); // Ajouter le type de fil MAG au tableau de résultats
		} else if (typeSoudure === "tig") {
			tableauResultats.push(["Diamètre du Tungstène (mm)", diametreTungstene]);
			tableauResultats.push(["Métal d'Apport", metalApport]);
		}

		// Extraire les valeurs d'intensité, d'amperage et de vitesse de fil
		var amperage = optionsTrouvees.amperage;
		var intensite = optionsTrouvees.intensite;
		var vitesseFil = optionsTrouvees.vitesseFil;

		// Afficher le tableau dans la page HTML avec les valeurs d'intensité, d'amperage et de vitesse de fil
		afficherTableauResultats(tableauResultats, amperage, intensite, vitesseFil);
	} else {
		alert(
			"Les options sélectionnées ne sont pas disponibles dans la base de données.",
		);
	}
}
