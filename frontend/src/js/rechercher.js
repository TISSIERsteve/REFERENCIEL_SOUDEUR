// //* FONCTION RECHERCHER *//

const optionsDatabaseArc = require("../../../backend/data/dataArc");
const optionsDatabaseMig = require("../../../backend/data/dataMig");
const optionsDatabaseMag = require("../../../backend/data/dataMag");
const getOptionsArc = require("./fichierConditions.js/getOptionsArc");
const getOptionsMig = require("./fichierConditions.js/getOptionsMig");
const getOptionsMag = require("./fichierConditions.js/getOptionsMag");

function rechercher() {
	var typeSoudure = document.getElementById("typeSoudure").value;
	var typeMateriau = document.getElementById("typeMateriau").value;
	var epaisseur = parseFloat(document.getElementById("epaisseur").value);
	var diametreElectrode = parseFloat(
		document.getElementById("diametreElectrode").value,
	);
	var diametreFil = document.getElementById("diametreFil").value;
	var diametreFilMAG = document.getElementById("diametreFilMAG").value;
	var typeElectrode = document.getElementById("typeElectrode").value;
	var positionSoudure = document.getElementById("positionSoudure").value;
	var typeCourant = document.getElementById("typeCourant").value;
	var typeFilMAG = document.getElementById("typeFilMAG").value;

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
	} else if (typeSoudure === "mag") {
		optionsDatabase = optionsDatabaseMag;

		const options = getOptionsMag(
			optionsDatabase,
			typeSoudure,
			typeMateriau,
			epaisseur,
			diametreFilMAG,
			positionSoudure,
			typeCourant,
			typeFilMAG,
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
