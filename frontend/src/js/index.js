// Importer la base de données
const optionsDatabaseArc = require("./baseDeDonneesArc");

console.log(optionsDatabaseArc); //

//* FONCTION AFFICHER CHAMPS SUPPLEMENTAIRES */
// Récupérer l'élément select
const typeSoudureSelect = document.getElementById("typeSoudure");

// Ajouter un écouteur d'événements pour le changement
typeSoudureSelect.addEventListener("change", function () {
	afficherChampsSupplementaires();
});

function afficherChampsSupplementaires() {
	var typeSoudure = document.getElementById("typeSoudure").value;
	var typeElectrode = document.getElementById("typeElectrode");
	var typeCourant = document.getElementById("typeCourant");
	var champsArc = document.getElementById("champsArc");
	var champsMIG = document.getElementById("champsMIG");
	var champsMAG = document.getElementById("champsMAG");
	var champsTIG = document.getElementById("champsTIG");
	var typeMateriau = document.getElementById("typeMateriau");

	// Masquer tous les champs supplémentaires
	champsArc.style.display = "none";
	champsMIG.style.display = "none";
	champsMAG.style.display = "none";
	champsTIG.style.display = "none";

	// Réinitialiser les options du type de matériau
	typeMateriau.innerHTML = '<option value=""></option>';

	// Réinitialiser et désactiver les options du type de courant
	typeCourant.innerHTML = '<option value="" disabled selected hidden></option>';

	typeCourant.disabled = true;

	// Afficher les champs supplémentaires en fonction du type de soudure sélectionné
	// *ARC*//
	if (typeSoudure === "arc") {
		champsArc.style.display = "block";

		typeElectrode.innerHTML = '<option value=""></option>';
		typeElectrode.innerHTML += '<option value="rutile">Rutile</option>';
		typeElectrode.innerHTML += '<option value="basique">Basique</option>';

		typeMateriau.innerHTML += '<option value="acier">Acier</option>';
		typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
		typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';

		typeElectrode.addEventListener("change", function () {
			typeCourant.disabled = false;
			typeCourant.innerHTML = ""; // Effacer les options précédentes
			if (typeElectrode.value === "rutile") {
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';
			} else if (typeElectrode.value === "basique") {
				typeCourant.innerHTML +=
					'<option value="continu_Positif">Courant Continu Positif</option>';
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';
			}
		});

		// *MIG*//
	} else if (typeSoudure === "mig") {
		champsMIG.style.display = "block";

		typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';

		typeMateriau.addEventListener("change", function () {
			typeCourant.disabled = false;
			typeCourant.innerHTML = ""; // Effacer les options précédentes
			if (typeMateriau.value === "aluminium") {
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';
			}
		});
	}

	// *MAG*//
	else if (typeSoudure === "mag") {
		champsMAG.style.display = "block";

		typeMateriau.innerHTML += '<option value="acier">Acier</option>';
		typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';

		typeMateriau.addEventListener("change", function () {
			typeCourant.disabled = false;
			typeCourant.innerHTML = ""; // Effacer les options précédentes
			if (typeMateriau.value === "acier" || typeMateriau.value === "inox") {
				typeCourant.innerHTML +=
					'<option value="continu_Positif">Courant Continu Positif</option>';
			}
		});
	}
	// *TIG*//
	else if (typeSoudure === "tig") {
		champsTIG.style.display = "block";
		// Ajouter les options appropriées pour la soudure TIG
		typeMateriau.innerHTML += '<option value="acier">Acier</option>';
		typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
		typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';

		typeMateriau.addEventListener("change", function () {
			typeCourant.disabled = false;
			typeCourant.innerHTML = ""; // Effacer les options précédentes
			if (typeMateriau.value === "acier" || typeMateriau.value === "inox") {
				typeCourant.innerHTML +=
					'<option value="continu_Positif">Courant Continu Positif</option>';
			} else if (typeMateriau.value === "aluminium") {
				typeCourant.innerHTML +=
					'<option value="continu_Alternatif">Courant Alternatif</option>';
			}
		});
	}
}

//* FONCTION CALCULER */
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

	champsRequis.forEach(function (champ) {
		if (document.getElementById(champ).value === "") {
			champsRemplis = false;
			return;
		}
	});

	// Si tous les champs sont remplis, procéder au calcul
	if (champsRemplis) {
		// Récupérer les valeurs des champs
		var typeSoudure = document.getElementById("typeSoudure").value;
		var typeMateriau = document.getElementById("typeMateriau").value;
		var epaisseur = document.getElementById("epaisseur").value;
		var diametreElectrode = document.getElementById("diametreElectrode").value;
		var typeElectrode = document.getElementById("typeElectrode").value;
		var diametreFil = document.getElementById("diametreFil").value;
		var diametreFilMAG = document.getElementById("diametreFilMAG").value;
		var diametreTungstene = document.getElementById("diametreTungstene").value;
		var metalApport = document.getElementById("metalApport").value;
		var positionSoudure = document.getElementById("positionSoudure").value;
		var typeCourant = document.getElementById("typeCourant").value;

		// Créer un tableau avec les valeurs récupérées
		var tableauResultats = [
			["Type de Soudure", typeSoudure],
			["Type de Matériau", typeMateriau],
			["Épaisseur du Matériau (mm)", epaisseur],
			["Diamètre de la Baguette (mm)", diametreElectrode],
			["Type de Baguette", typeElectrode],
			["Diamètre du Fil (mm)", diametreFil],
			["Diamètre du Fil MAG (mm)", diametreFilMAG],
			["Diamètre du Tungstène (mm)", diametreTungstene],
			["Métal d'Apport", metalApport],
			["Position de la Soudure", positionSoudure],
			["Type de Courant", typeCourant],
		];

		// Afficher le tableau dans la page HTML
		afficherTableauResultats(tableauResultats);
	} else {
		alert("Veuillez remplir tous les champs avant de procéder au calcul.");
	}
}

function afficherTableauResultats(tableau) {
	var resultatDiv = document.getElementById("resultats");
	resultatDiv.innerHTML = ""; // Nettoyer le contenu précédent

	var table = document.createElement("table");
	var tbody = document.createElement("tbody");

	tableau.forEach(function (rowData) {
		var row = document.createElement("tr");

		rowData.forEach(function (cellData) {
			var cell = document.createElement("td");
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});

		tbody.appendChild(row);
	});

	table.appendChild(tbody);
	resultatDiv.appendChild(table);

	// Calculer l'ampérage, l'intensité et la vitesse d'avance
	var amperage = calculerAmperage(/* Passer les paramètres nécessaires */);
	var intensite = calculerIntensite(/* Passer les paramètres nécessaires */);
	var vitesseAvance =
		calculerVitesseAvance(/* Passer les paramètres nécessaires */);

	// Afficher les résultats
	var infoDiv = document.createElement("div");
	infoDiv.innerHTML =
		"Votre ampérage doit être de : " +
		amperage +
		"<br>" +
		"Votre intensité doit être de : " +
		intensite +
		"<br>" +
		"Votre vitesse d'avance doit être de : " +
		vitesseAvance;
	resultatDiv.appendChild(infoDiv);
}

function calculerAmperage(/* Paramètres nécessaires pour le calcul */) {
	// Implémentez votre logique de calcul de l'ampérage ici
}

function calculerIntensite(/* Paramètres nécessaires pour le calcul */) {
	// Implémentez votre logique de calcul de l'intensité ici
}

function calculerVitesseAvance(/* Paramètres nécessaires pour le calcul */) {
	// Implémentez votre logique de calcul de la vitesse d'avance ici
}
