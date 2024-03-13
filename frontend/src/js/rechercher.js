// //* FONCTION RECHERCHER *//

// Import de mes fichiers
const optionsDatabaseArc = require("../../../backend/data/dataArc");
const optionsDatabaseMig = require("../../../backend/data/dataMig");
const optionsDatabaseMag = require("../../../backend/data/dataMag");
const optionsDatabaseTig = require("../../../backend/data/dataTig");
const getOptionsArc = require("./fichierConditionsBdd.js/getOptionsArc");
const getOptionsMig = require("./fichierConditionsBdd.js/getOptionsMig");
const getOptionsMag = require("./fichierConditionsBdd.js/getOptionsMag");
const getOptionsTig = require("./fichierConditionsBdd.js/getOptionsTig");

// Fonctions
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
	diametreTungstene = parseFloat(
		document.getElementById("diametreTungstene").value,
	);

	var intensite, amperage, vitesseFil;
	var optionsDatabase;

	// *ARC *//
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
	}

	// *MIG *//
	else if (typeSoudure === "mig") {
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

	// *MAG* //
	else if (typeSoudure === "mag") {
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

	// *TIG* //
	else if (typeSoudure === "tig") {
		// Si c'est une soudure TIG
		optionsDatabase = optionsDatabaseTig;
		const options = getOptionsTig(
			optionsDatabase,
			typeSoudure,
			typeMateriau,
			epaisseur,
			diametreTungstene,
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
