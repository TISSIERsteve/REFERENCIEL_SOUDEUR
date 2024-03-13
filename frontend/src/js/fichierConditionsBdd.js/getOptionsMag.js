const optionsDatabaseMag = require("../../../../backend/data/dataMag");

function getOptionsMag(
	optionsDatabaseMag,
	typeSoudure,
	typeMateriau,
	epaisseur,
	diametreFilMag,
	positionSoudure,
	typeCourant,
) {
	if (
		optionsDatabaseMag[typeSoudure] &&
		optionsDatabaseMag[typeSoudure][typeMateriau] &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur] &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreFilMag &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreFilMag[diametreFilMag] &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreFilMag[diametreFilMag].position &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreFilMag[diametreFilMag].position[positionSoudure] &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant &&
		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
			typeCourant
		]
	) {
		intensite =
			optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
				typeCourant
			].intensite;
		amperage =
			optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
				typeCourant
			].amperage;
		vitesseFil =
			optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
				typeCourant
			].vitesseFil;
		return { intensite, amperage, vitesseFil };
	}

	return null;
}

module.exports = getOptionsMag;

// const optionsDatabaseMag = require("../../../../backend/data/dataMag");

// function getOptionsMag(
// 	optionsDatabaseMag,
// 	typeSoudure,
// 	typeMateriau,
// 	epaisseur,
// 	diametreFilMag,
// 	positionSoudure,
// 	typeCourant,
// 	typeFilMAG,
// ) {
// 	if (
// 		optionsDatabaseMag[typeSoudure] &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau] &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur] &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag[diametreFilMag] &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag[diametreFilMag].position &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag[diametreFilMag].position[positionSoudure] &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
// 			typeCourant
// 		] &&
// 		optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 			.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
// 			typeCourant
// 		][typeFilMAG] // Vérifier le type de fil MAG
// 	) {
// 		intensite =
// 			optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 				.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
// 				typeCourant
// 			][typeFilMAG].intensite;
// 		amperage =
// 			optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 				.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
// 				typeCourant
// 			][typeFilMAG].amperage;
// 		vitesseFil =
// 			optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur]
// 				.diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[
// 				typeCourant
// 			][typeFilMAG].vitesseFil;
// 		return { intensite, amperage, vitesseFil };
// 	}

// 	return null;
// }

// module.exports = getOptionsMag;
