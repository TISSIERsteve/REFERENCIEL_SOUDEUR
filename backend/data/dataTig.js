//

const optionsDatabaseTig = {
	tig: {
		acier: {
			epaisseur: {
				1: {
					diametreTungstene: {
						1.6: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Negatif: {
											metalApport: "acier",
											intensite: { min: 80, max: 1.2 },
											amperage: { min: 80, max: 1.5 },
											vitesseFil: { min: 200, max: 3.5 },
										},
									},
								},
							},
						},
					},
				},
			},
		},
		aluminium: {
			epaisseur: {
				1: {
					diametreTungstene: {
						3.2: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Alternatif: {
											metalApport: "aluminium",
											intensite: { min: 90, max: 1.5 },
											amperage: { min: 90, max: 1.8 },
											vitesseFil: { min: 220, max: 4.0 },
										},
									},
								},
							},
						},
					},
				},
			},
		},
		inox: {
			epaisseur: {
				1: {
					diametreTungstene: {
						1.6: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Negatif: {
											metalApport: "inox",
											intensite: { min: 85, max: 1.4 },
											amperage: { min: 85, max: 1.7 },
											vitesseFil: { min: 210, max: 3.8 },
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

module.exports = optionsDatabaseTig;
