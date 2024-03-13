const optionsDatabaseArc = require("../../../../backend/data/dataArc");

function getOptionsArc(
	optionsDatabaseArc,
	typeSoudure,
	typeMateriau,
	epaisseur,
	typeElectrode,
	diametreElectrode,
	positionSoudure,
	typeCourant,
) {
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
	return null;
}

module.exports = getOptionsArc;
