const optionsDatabaseTig = require("../../../../backend/data/dataTig");

function getOptionsTig(
	optionsDatabaseTig,
	typeSoudure,
	typeMateriau,
	epaisseur,
	diametreTungstene,
	positionSoudure,
	typeCourant,
	metalApport,
) {
	if (
		optionsDatabaseTig[typeSoudure] &&
		optionsDatabaseTig[typeSoudure][typeMateriau] &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur] &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreTungstene &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreTungstene[diametreTungstene] &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreTungstene[diametreTungstene].position &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreTungstene[diametreTungstene].position[positionSoudure] &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreTungstene[diametreTungstene].position[positionSoudure]
			.typeCourant &&
		optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
			.diametreTungstene[diametreTungstene].position[positionSoudure]
			.typeCourant[typeCourant]
	) {
		const options =
			optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur]
				.diametreTungstene[diametreTungstene].position[positionSoudure]
				.typeCourant[typeCourant];
		const { intensite, amperage, vitesseFil, electrode } = options;
		return { intensite, amperage, vitesseFil, electrode, metalApport };
	}

	return null;
}

module.exports = getOptionsTig;
