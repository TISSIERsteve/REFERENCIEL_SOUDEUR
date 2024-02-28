const optionsDatabaseArc = require("./baseDeDonneesArc");

function rechercher() {
	var typeSoudure = document.getElementById("typeSoudure").value;
	var typeMateriau = document.getElementById("typeMateriau").value;
	var epaisseur = parseFloat(document.getElementById("epaisseur").value);
	var diametreElectrode = parseFloat(
		document.getElementById("diametreElectrode").value,
	);
	var typeElectrode = document.getElementById("typeElectrode").value;
	var positionSoudure = document.getElementById("positionSoudure").value;
	var typeCourant = document.getElementById("typeCourant").value;

	var intensite, amperage, vitesseFil;

	if (
		optionsDatabaseArc[typeSoudure] &&
		optionsDatabaseArc[typeSoudure][typeMateriau] &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur] &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode] &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode].diametre &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode].diametre[diametreElectrode] &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode].diametre[diametreElectrode].position &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode].diametre[diametreElectrode].position[
			positionSoudure
		] &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode].diametre[diametreElectrode].position[
			positionSoudure
		].typeCourant &&
		optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.baguettes[typeElectrode].diametre[diametreElectrode].position[
			positionSoudure
		].typeCourant[typeCourant]
	) {
		intensite =
			optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.baguettes[typeElectrode].diametre[diametreElectrode].position[
				positionSoudure
			].typeCourant[typeCourant].intensite;
		amperage =
			optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.baguettes[typeElectrode].diametre[diametreElectrode].position[
				positionSoudure
			].typeCourant[typeCourant].amperage;
		vitesseFil =
			optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.baguettes[typeElectrode].diametre[diametreElectrode].position[
				positionSoudure
			].typeCourant[typeCourant].vitesseFil;

		return { intensite, amperage, vitesseFil };
	}

	alert(
		"Les options sélectionnées ne sont pas disponibles dans la base de données.",
	);
	return null;
}
module.exports = rechercher;
