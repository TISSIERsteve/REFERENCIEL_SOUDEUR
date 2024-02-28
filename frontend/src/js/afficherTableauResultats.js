//* FONCTION AFFICHER TABLEAU RESULTAT *//

function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
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

	// Afficher les résultats passés en paramètres
	var infoDiv = document.createElement("div");
	infoDiv.innerHTML =
		//
		"Votre ampérage doit être de : " +
		amperage.min +
		"A" +
		" et " +
		amperage.max +
		"A" +
		"<br>" +
		//
		"Votre intensité doit être de : " +
		intensite.min +
		"A" +
		" et " +
		intensite.max +
		"A" +
		"<br>" +
		//
		"Votre vitesse d'avance doit être de : " +
		vitesseFil.min +
		"A" +
		" et " +
		vitesseFil.max +
		"A";
	resultatDiv.appendChild(infoDiv);
}

module.exports = afficherTableauResultats;
