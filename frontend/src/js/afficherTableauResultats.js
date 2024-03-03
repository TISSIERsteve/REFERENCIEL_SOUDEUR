// // //* FONCTION AFFICHER TABLEAU RESULTAT *//

// // function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
// // 	var resultatDiv = document.getElementById("resultats");

// // 	resultatDiv.innerHTML = ""; // Nettoyer le contenu précédent

// // 	var table = document.createElement("table");
// // 	var tbody = document.createElement("tbody");

// // 	tableau.forEach(function (rowData) {
// // 		var row = document.createElement("tr");

// // 		rowData.forEach(function (cellData) {
// // 			var cell = document.createElement("td");
// // 			cell.appendChild(document.createTextNode(cellData));
// // 			row.appendChild(cell);
// // 		});

// // 		tbody.appendChild(row);
// // 	});

// // 	table.appendChild(tbody);
// // 	resultatDiv.appendChild(table);

// // 	// Afficher les résultats passés en paramètres
// // 	var infoDiv = document.createElement("div");
// // 	infoDiv.innerHTML =
// // 		//
// // 		"Votre ampérage doit être de : " +
// // 		amperage.min +
// // 		"A" +
// // 		" et " +
// // 		amperage.max +
// // 		"A" +
// // 		"<br>" +
// // 		//
// // 		"Votre intensité doit être de : " +
// // 		intensite.min +
// // 		"A" +
// // 		" et " +
// // 		intensite.max +
// // 		"A" +
// // 		"<br>" +
// // 		//
// // 		"Votre vitesse d'avance doit être de : " +
// // 		vitesseFil.min +
// // 		"A" +
// // 		" et " +
// // 		vitesseFil.max +
// // 		"A";
// // 	resultatDiv.appendChild(infoDiv);
// // }

// //* CETTE FONCTION EFFACE LES CHAMPS NON UTILISER

// function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
// 	var resultatDiv = document.getElementById("resultats");

// 	resultatDiv.style.display = "block";
// 	resultatDiv.innerHTML = ""; // Nettoyer le contenu précédent

// 	var table = document.createElement("table");
// 	var tbody = document.createElement("tbody");

// 	tableau.forEach(function (rowData) {
// 		// Vérifier si la valeur de la deuxième colonne est définie
// 		if (typeof rowData[1] !== "undefined") {
// 			var row = document.createElement("tr");
// 			var cell1 = document.createElement("td");
// 			cell1.appendChild(document.createTextNode(rowData[0]));
// 			var cell2 = document.createElement("td");
// 			cell2.appendChild(document.createTextNode(rowData[1]));
// 			row.appendChild(cell1);
// 			row.appendChild(cell2);
// 			tbody.appendChild(row);
// 		}
// 	});

// 	table.appendChild(tbody);
// 	resultatDiv.appendChild(table);

// 	// Afficher les résultats passés en paramètres
// 	var infoDiv = document.createElement("div");
// 	infoDiv.innerHTML = `  <tr>
//             <td>Amperage</td>
//             <td>${amperage.min}A - ${amperage.max}A</td>
//         </tr>
//         <tr>
//             <td>Intensité</td>
//             <td>${intensite.min}A - ${intensite.max}A</td>
//         </tr>
//         <tr>
//             <td>Vitesse de fil</td>
//             <td>${vitesseFil.min}A - ${vitesseFil.max}A</td>
//         </tr>
//     `;
// 	// "Votre ampérage doit être de : " +
// 	// amperage.min +
// 	// "A" +
// 	// " et " +
// 	// amperage.max +
// 	// "A" +
// 	// "<br>" +
// 	// "Votre intensité doit être de : " +
// 	// intensite.min +
// 	// "A" +
// 	// " et " +
// 	// intensite.max +
// 	// "A" +
// 	// "<br>" +
// 	// "Votre vitesse d'avance doit être de : " +
// 	// vitesseFil.min +
// 	// "A" +
// 	// " et " +
// 	// vitesseFil.max +
// 	// "A";
// 	// table.appendChild(tbody);
// 	resultatDiv.appendChild(infoDiv);
// }

// module.exports = afficherTableauResultats;
function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
	var resultatDiv = document.getElementById("resultats");

	// Afficher la fenêtre de résultats
	resultatDiv.style.display = "block";

	// Flouter l'arrière-plan
	document.body.classList.add("modal-open");

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

	// Ajouter les lignes pour amperage, intensite et vitesse de fil
	var amperageRow = document.createElement("tr");
	var amperageCell1 = document.createElement("td");
	amperageCell1.appendChild(document.createTextNode("Amperage"));
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
	vitesseFilCell1.appendChild(document.createTextNode("Vitesse de fil"));
	var vitesseFilCell2 = document.createElement("td");
	vitesseFilCell2.appendChild(
		document.createTextNode(`${vitesseFil.min}A - ${vitesseFil.max}A`),
	);
	vitesseFilRow.appendChild(vitesseFilCell1);
	vitesseFilRow.appendChild(vitesseFilCell2);
	tbody.appendChild(vitesseFilRow);

	table.appendChild(tbody);
	resultatDiv.appendChild(table);
}

module.exports = afficherTableauResultats;
