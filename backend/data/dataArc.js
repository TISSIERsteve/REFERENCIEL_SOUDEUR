const optionsDatabaseArc = {
	arc: {
		acier: {
			epaisseur: {
				1: {
					baguettes: {
						rutile: {
							diametre: {
								1.2: {
									position: {
										plat_penetration: {
											typeCourant: {
												continu_Negatif: {
													intensite: { min: 50, max: 100 },
													amperage: { min: 70, max: 120 },
													vitesseFil: { min: 3, max: 6 },
												},
											},
										},
									},
								},
							},
						},
						basique: {
							diametre: {
								1.2: {
									position: {
										plat_penetration: {
											typeCourant: {
												continu_Negatif: {
													intensite: { min: 6000, max: 110 },
													amperage: { min: 8000, max: 130 },
													vitesseFil: { min: 3.2, max: 6.5 },
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
		},
	},
};

module.exports = optionsDatabaseArc;
