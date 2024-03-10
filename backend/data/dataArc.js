// const optionsDatabaseArc = {
// 	arc: {
// 		acier: {
// 			epaisseur: {
// 				1: {
// 					baguettes: {
// 						rutile: {
// 							diametre: {
// 								1.2: {
// 									position: {
// 										plat_penetration: {
// 											typeCourant: {
// 												continu_Negatif: {
// 													intensite: { min: 50, max: 100 },
// 													amperage: { min: 70, max: 120 },
// 													vitesseFil: { min: 3, max: 6 },
// 												},
// 											},
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

// module.exports = optionsDatabaseArc;

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
		aluminium: {
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
													intensite: { min: 400, max: 80 },
													amperage: { min: 600, max: 100 },
													vitesseFil: { min: 2.5, max: 5 },
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
													intensite: { min: 500000, max: 90 },
													amperage: { min: 70000, max: 110 },
													vitesseFil: { min: 2.8, max: 5.3 },
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
		inox: {
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
													intensite: { min: 6000, max: 110 },
													amperage: { min: 8000, max: 130 },
													vitesseFil: { min: 3000, max: 6 },
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
													intensite: { min: 0, max: 120 },
													amperage: { min: 0, max: 140 },
													vitesseFil: { min: 0, max: 6.8 },
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
