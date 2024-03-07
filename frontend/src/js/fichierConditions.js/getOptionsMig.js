const optionsDatabaseMig = require("../../../../backend/data/dataMig");

function getOptionsMig(
	optionsDatabaseMig,
	typeSoudure,
	typeMateriau,
	epaisseur,
	diametreFil,
	positionSoudure,
	typeCourant,
) {
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

	return null;
}

module.exports = getOptionsMig;
