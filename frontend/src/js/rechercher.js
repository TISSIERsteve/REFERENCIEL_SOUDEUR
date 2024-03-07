// //* FONCTION RECHERCHER *//

const optionsDatabaseArc = require("../../../backend/data/dataArc");
const optionsDatabaseMig = require("../../../backend/data/dataMig");
const getOptionsArc = require("./fichierConditions.js/getOptionsArc");
const getOptionsMig = require("./fichierConditions.js/getOptionsMig");

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
		const options = getOptionsArc(
			optionsDatabase,
			typeSoudure,
			typeMateriau,
			epaisseur,
			typeElectrode,
			diametreElectrode,
			positionSoudure,
			typeCourant,
		);
		if (options) {
			intensite = options.intensite;
			amperage = options.amperage;
			vitesseFil = options.vitesseFil;
			return { intensite, amperage, vitesseFil };
		}
	} else if (typeSoudure === "mig") {
		const options = getOptionsMig(
			optionsDatabaseMig,
			typeSoudure,
			typeMateriau,
			epaisseur,
			diametreFil,
			positionSoudure,
			typeCourant,
		);
		if (options) {
			intensite = options.intensite;
			amperage = options.amperage;
			vitesseFil = options.vitesseFil;
			return { intensite, amperage, vitesseFil };
		}
	}

	console.error("Type de soudure non pris en charge : " + typeSoudure);
	return null;
}

module.exports = rechercher;
