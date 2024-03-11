//* FONCTION AFFICHER TABLEAU RESULTATS

// Import de mes fichiers
const ajouterBoutonRefresh = require("./buttonRefresh");

function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
	var typeAvance = tableau[0][1];
	var resultatDiv = document.getElementById("resultats");

	// Afficher la fenêtre de résultats
	resultatDiv.style.display = "block";

	// Flouter l'arrière-plan
	document.body.classList.add("modal-open");

	// Animation fenêtre
	document.getElementById("resultats").classList.add("show");

	// Nettoyer le contenu précédent
	resultatDiv.innerHTML = "";

	var table = document.createElement("table");
	var tbody = document.createElement("tbody");

	tableau.forEach(function (rowData) {
		// Vérifier si la valeur de la deuxième colonne est définie
		if (typeof rowData[1] !== "undefined") {
			var row = document.createElement("tr");
			var cell1 = document.createElement("td");
			cell1.appendChild(document.createTextNode(rowData[0]));
			var cell2 = document.createElement("td");
			cell2.appendChild(document.createTextNode(rowData[1]));

			row.appendChild(cell1);
			row.appendChild(cell2);
			tbody.appendChild(row);
		}
	});

	// Conditions pour afficher le choix du type d'avance
	var vitesseLabel;

	if (typeAvance === "arc" || typeAvance === "tig") {
		vitesseLabel = "Vitesse d'avance";
	} else if (typeAvance === "mag" || typeAvance === "mig") {
		vitesseLabel = "Vitesse de fil";
	}

	// Ajouter les lignes pour amperage, intensite et vitesse de fil
	var amperageRow = document.createElement("tr");
	var amperageCell1 = document.createElement("td");
	amperageCell1.appendChild(document.createTextNode("Ampérage"));
	var amperageCell2 = document.createElement("td");
	amperageCell2.appendChild(
		document.createTextNode(`${amperage.min}A - ${amperage.max}A`),
	);
	amperageRow.appendChild(amperageCell1);
	amperageRow.appendChild(amperageCell2);
	tbody.appendChild(amperageRow);

	var intensiteRow = document.createElement("tr");
	var intensiteCell1 = document.createElement("td");
	intensiteCell1.appendChild(document.createTextNode("Intensité"));
	var intensiteCell2 = document.createElement("td");
	intensiteCell2.appendChild(
		document.createTextNode(`${intensite.min}A - ${intensite.max}A`),
	);
	intensiteRow.appendChild(intensiteCell1);
	intensiteRow.appendChild(intensiteCell2);
	tbody.appendChild(intensiteRow);

	var vitesseFilRow = document.createElement("tr");
	var vitesseFilCell1 = document.createElement("td");

	// Affichage de la condition vitesse
	vitesseFilCell1.appendChild(document.createTextNode(vitesseLabel));

	var vitesseFilCell2 = document.createElement("td");
	vitesseFilCell2.appendChild(
		document.createTextNode(`${vitesseFil.min}A - ${vitesseFil.max}A`),
	);
	vitesseFilRow.appendChild(vitesseFilCell1);
	vitesseFilRow.appendChild(vitesseFilCell2);
	tbody.appendChild(vitesseFilRow);

	table.appendChild(tbody);
	resultatDiv.appendChild(table);

	//* FONCTION BOUTTON REFRESH *//
	ajouterBoutonRefresh();
}

module.exports = afficherTableauResultats;
