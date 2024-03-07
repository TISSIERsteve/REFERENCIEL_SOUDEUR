// //* FONCTION RECHERCHER *//

const optionsDatabaseArc = require("../../../backend/data/dataArc");
const optionsDatabaseMig = require("../../../backend/data/dataMig");

function rechercher() {
	var typeSoudure = document.getElementById("typeSoudure").value;
	var typeMateriau = document.getElementById("typeMateriau").value;
	var epaisseur = parseFloat(document.getElementById("epaisseur").value);
	var diametreElectrode = parseFloat(
		document.getElementById("diametreElectrode").value,
	);
	var diametreFil = document.getElementById("diametreFil").value;
	var typeElectrode = document.getElementById("typeElectrode").value;
	var positionSoudure = document.getElementById("positionSoudure").value;
	var typeCourant = document.getElementById("typeCourant").value;

	var intensite, amperage, vitesseFil;
	var optionsDatabase;

	if (typeSoudure === "arc") {
		optionsDatabase = optionsDatabaseArc;
	} else if (typeSoudure === "mig") {
		optionsDatabase = optionsDatabaseMig;
	} else {
		// Gestion d'un type de soudure inconnu ou non pris en charge
		console.error("Type de soudure non pris en charge : " + typeSoudure);
		return null;
	}

	if (typeSoudure === "arc") {
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
	} else if (typeSoudure === "mig") {
		if (
			optionsDatabaseMig[typeSoudure] &&
			optionsDatabaseMig[typeSoudure][typeMateriau] &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur] &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFil &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFil[diametreFil] &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFil[diametreFil].position &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFil[diametreFil].position[positionSoudure] &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFil[diametreFil].position[positionSoudure].typeCourant &&
			optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFil[diametreFil].position[positionSoudure].typeCourant[
				typeCourant
			]
		) {
			intensite =
				optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
					.diametreFil[diametreFil].position[positionSoudure].typeCourant[
					typeCourant
				].intensite;
			amperage =
				optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
					.diametreFil[diametreFil].position[positionSoudure].typeCourant[
					typeCourant
				].amperage;
			vitesseFil =
				optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur]
					.diametreFil[diametreFil].position[positionSoudure].typeCourant[
					typeCourant
				].vitesseFil;
			return { intensite, amperage, vitesseFil };
		}
	}

	return null;
}
module.exports = rechercher;
