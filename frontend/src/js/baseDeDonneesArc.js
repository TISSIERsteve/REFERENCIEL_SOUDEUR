const optionsDatabaseArc = {
	// Types de soudure disponibles
	typeSoudure: ["arc"],

	// Configuration des matériaux
	typeMateriau: {
		acier: {
			epaisseur: {
				// Configuration par épaisseur pour l'acier
				1: {
					baguettes: {
						// Configuration par type de baguette
						rutile: {
							// Configuration par diamètre de baguette
							1.2: {
								// Configuration par position de soudure
								plat_penetration: {
									// Configuration par type de courant
									continu_Positif: {
										intensite: { min: 50, max: 100 },
										amperage: { min: 70, max: 120 },
										vitesseFil: { min: 3, max: 6 },
									},
									// Ajoutez d'autres configurations de courant si nécessaire
								},
								// Ajoutez d'autres configurations de position de soudure si nécessaire
							},
							// Ajoutez d'autres configurations de diamètre de baguette de rutile si nécessaire
						},
						// Ajoutez d'autres configurations de type de baguette pour l'acier si nécessaire
					},
				},
				// Ajoutez d'autres configurations par épaisseur pour l'acier si nécessaire
			},
		},
		// Ajoutez d'autres matériaux avec leur configuration respective si nécessaire
	},
};

// Exporter la base de données pour qu'elle soit accessible depuis d'autres fichiers si nécessaire
module.exports = optionsDatabaseArc;

// // Base de données pour stocker les options possibles
// let optionsDatabaseArc = {
// 	typeSoudure: ["arc", "mig", "mag", "tig"],
// 	typeMateriau: ["acier", "aluminium", "inox"],
// 	diametreElectrode: ["1.2", "2.5", "3.2", "4"],
// 	typeElectrode: ["rutile", "basique"],
// 	diametreFil: ["0.6", "1", "1.2", "1.6"],
// 	diametreFilMAG: ["0.8", "1", "1.2", "1.6"],
// 	diametreTungstene: ["1", "1.6", "3.2"],
// 	metalApport: ["acier", "aluminium", "inox"],
// 	positionSoudure: [
// 		"plat_penetration",
// 		"plat_remplissage",
// 		"horizontal_angle_plat",
// 		"corniche_passe_penetration",
// 		"corniche_passe_remplissage",
// 		"plafond_passe_penetration",
// 		"plafond_passe_remplissage",
// 		"vertical",
// 		"montante",
// 	],
// 	typeCourant: ["continu_Positif", "continu_Negatif", "courant_Alternatif"],
// };

// // Exporter la base de données pour qu'elle soit accessible depuis d'autres fichiers si nécessaire
// module.exports = optionsDatabaseArc;
