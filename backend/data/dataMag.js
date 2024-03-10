// // const optionsDatabaseMag = {
// // 	mag: {
// // 		acier: {
// // 			epaisseur: {
// // 				1: {
// // 					diametreFilMag: {
// // 						0.8: {
// // 							position: {
// // 								plat_penetration: {
// // 									typeCourant: {
// // 										continu_Positif: {
// // 											intensite: { min: 100, max: 1 },
// // 											amperage: { min: 100, max: 2 },
// // 											vitesseFil: { min: 300, max: 6 },
// // 										},
// // 									},
// // 								},
// // 							},
// // 						},
// // 					},
// // 				},
// // 			},
// // 		},
// // 	},
// // };

// // module.exports = optionsDatabaseMag;

// const optionsDatabaseMag = {
// 	mag: {
// 		acier: {
// 			epaisseur: {
// 				1: {
// 					diametreFilMag: {
// 						0.8: {
// 							position: {
// 								plat_penetration: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 100, max: 1 },
// 											amperage: { min: 100, max: 2 },
// 											vitesseFil: { min: 300, max: 6 },
// 										},
// 									},
// 								},
// 							},
// 						},
// 						1.2: {
// 							position: {
// 								plat_penetration: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "fourré", // Exemple de fil fourré
// 											intensite: { min: 120, max: 1.5 },
// 											amperage: { min: 90, max: 1.8 },
// 											vitesseFil: { min: 280, max: 5.5 },
// 										},
// 									},
// 								},
// 							},
// 						},
// 					},
// 				},
// 			},
// 		},
// 	},
// };

// module.exports = optionsDatabaseMag;

// * FONCTIONNEL *//
const optionsDatabaseMag = {
	mag: {
		acier: {
			epaisseur: {
				1: {
					diametreFilMag: {
						0.8: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Positif: {
											fil: "plein",
											intensite: { min: 100, max: 1 },
											amperage: { min: 100, max: 2 },
											vitesseFil: { min: 300, max: 6 },
										},
									},
								},
							},
						},
						1.2: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Positif: {
											fil: "fourré",
											intensite: { min: 120, max: 1.5 },
											amperage: { min: 90, max: 1.8 },
											vitesseFil: { min: 280, max: 5.5 },
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
					diametreFilMag: {
						0.8: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Positif: {
											fil: "plein",
											intensite: { min: 1010, max: 1.2 },
											amperage: { min: 1100, max: 2.2 },
											vitesseFil: { min: 3200, max: 6.5 },
										},
									},
								},
							},
						},
						1.2: {
							position: {
								plat_penetration: {
									typeCourant: {
										continu_Positif: {
											fil: "fourré",
											intensite: { min: 130, max: 1.7 },
											amperage: { min: 100, max: 2.0 },
											vitesseFil: { min: 300, max: 6.0 },
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

module.exports = optionsDatabaseMag;

// const optionsDatabaseMag = {
// 	mag: {
// 		acier: {
// 			epaisseur: {
// 				1: {
// 					diametreFilMag: {
// 						0.6: {
// 							position: {
// 								plat_penetration: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 100, max: 1 },
// 											amperage: { min: 100, max: 2 },
// 											vitesseFil: { min: 300, max: 6 },
// 										},
// 									},
// 								},
// 								plat_remplissage: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 120, max: 1.5 },
// 											amperage: { min: 120, max: 2 },
// 											vitesseFil: { min: 320, max: 6.5 },
// 										},
// 									},
// 								},
// 								horizontal_angle_plat: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 110, max: 1.2 },
// 											amperage: { min: 110, max: 2.2 },
// 											vitesseFil: { min: 310, max: 6.3 },
// 										},
// 									},
// 								},
// 								corniche_passe_penetration: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 105, max: 1.1 },
// 											amperage: { min: 105, max: 2.1 },
// 											vitesseFil: { min: 315, max: 6.2 },
// 										},
// 									},
// 								},
// 								corniche_passe_remplissage: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 115, max: 1.3 },
// 											amperage: { min: 115, max: 2.3 },
// 											vitesseFil: { min: 325, max: 6.6 },
// 										},
// 									},
// 								},
// 								plafond_passe_penetration: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 130, max: 1.4 },
// 											amperage: { min: 130, max: 2.4 },
// 											vitesseFil: { min: 330, max: 6.8 },
// 										},
// 									},
// 								},
// 								plafond_passe_remplissage: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 135, max: 1.6 },
// 											amperage: { min: 135, max: 2.6 },
// 											vitesseFil: { min: 340, max: 7 },
// 										},
// 									},
// 								},
// 								vertical: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 125, max: 1.5 },
// 											amperage: { min: 125, max: 2.5 },
// 											vitesseFil: { min: 335, max: 6.9 },
// 										},
// 									},
// 								},
// 								montante: {
// 									typeCourant: {
// 										continu_Positif: {
// 											fil: "plein",
// 											intensite: { min: 120, max: 1.3 },
// 											amperage: { min: 120, max: 2.3 },
// 											vitesseFil: { min: 320, max: 6.5 },
// 										},
// 									},
// 								},
// 							},
// 						},
// 						0.8: {
// 							// Configuration pour le diamètre de fil 0.8 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						1: {
// 							// Configuration pour le diamètre de fil 1 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						1.2: {
// 							// Configuration pour le diamètre de fil 1.2 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						1.6: {
// 							// Configuration pour le diamètre de fil 1.6 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 					},
// 				},
// 			},
// 		},
// 		inox: {
// 			epaisseur: {
// 				1: {
// 					diametreFilMag: {
// 						0.6: {
// 							// Configuration pour le diamètre de fil 0.6 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						0.8: {
// 							// Configuration pour le diamètre de fil 0.8 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						1: {
// 							// Configuration pour le diamètre de fil 1 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						1.2: {
// 							// Configuration pour le diamètre de fil 1.2 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 						1.6: {
// 							// Configuration pour le diamètre de fil 1.6 avec toutes les positions de soudage et choix de fil
// 							// Ajoutez les configurations similaires pour toutes les positions de soudage
// 						},
// 					},
// 				},
// 			},
// 		},
// 	},
// };

// module.exports = optionsDatabaseMag;
