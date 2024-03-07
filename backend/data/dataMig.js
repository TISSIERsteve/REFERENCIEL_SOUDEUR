const optionsDatabaseMig = {
	mig: {
		aluminium: {
			epaisseur: {
				1: {
					diametreFil: {
						0.6: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Negatif: {
											intensite: { min: 0, max: 1 },
											amperage: { min: 0, max: 2 },
											vitesseFil: { min: 3, max: 6 },
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
};

module.exports = optionsDatabaseMig;
