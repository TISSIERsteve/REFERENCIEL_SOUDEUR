// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/fichiersConditionAffichChamSuppl.js/arc.js":[function(require,module,exports) {
//* ARC

function afficherArc() {
  champsArc.style.display = "block";

  // Désactiver les champs non nécessaires
  typeElectrode.innerHTML = '<option value=""></option>';
  typeMateriau.innerHTML += '<option value="acier">Acier</option>';
  typeElectrode.innerHTML += '<option value="rutile">Rutile</option>';
  typeElectrode.innerHTML += '<option value="basique">Basique</option>';

  // Fonction choix style enrobage électrode
  typeElectrode.addEventListener("change", function () {
    typeCourant.disabled = false;
    typeCourant.innerHTML = "";

    // Arc Rutile
    if (typeElectrode.value === "rutile") {
      typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';

      // Arc Basique
    } else if (typeElectrode.value === "basique") {
      typeCourant.innerHTML += '<option value="continu_Positif">Courant Continu Positif</option>';
      typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';
    }
  });
}
module.exports = afficherArc;
},{}],"js/fichiersConditionAffichChamSuppl.js/mag.js":[function(require,module,exports) {
//* MAG
function afficherMAG() {
  champsMAG.style.display = "block";

  // Afficher le champ "Type de Fil MAG"
  typeFilMAG.style.display = "block";

  // Réinitialiser les options du type de matériau
  typeMateriau.innerHTML = '<option value=""></option>';
  typeMateriau.innerHTML += '<option value="acier">Acier</option>';
  typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';
  typeMateriau.addEventListener("change", function () {
    typeCourant.disabled = false;
    typeCourant.innerHTML = "";

    // Mag Acier et Inox
    if (typeMateriau.value === "acier" || typeMateriau.value === "inox") {
      typeCourant.innerHTML += '<option value="continu_Positif">Courant Continu Positif</option>';
    }
  });
}
module.exports = afficherMAG;
},{}],"js/fichiersConditionAffichChamSuppl.js/mig.js":[function(require,module,exports) {
//* MIG*

function afficherMIG() {
  champsMIG.style.display = "block";

  // Désactiver les champs non nécessaires
  typeElectrode.disabled = true;
  diametreElectrode.disabled = true;
  typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
  typeMateriau.addEventListener("change", function () {
    typeCourant.disabled = false;
    typeCourant.innerHTML = "";

    // Mig Aluminium
    if (typeMateriau.value === "aluminium") {
      typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';
    }
  });
}
module.exports = afficherMIG;
},{}],"js/fichiersConditionAffichChamSuppl.js/tig.js":[function(require,module,exports) {
//* TIG

function afficherTIG() {
  champsTIG.style.display = "block";
  metalApport.style.display = "block";

  // Ajouter les options appropriées pour la soudure TIG
  typeMateriau.innerHTML += '<option value="acier">Acier</option>';
  typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
  typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';
  typeMateriau.addEventListener("change", function () {
    typeCourant.disabled = false;
    typeCourant.innerHTML = "";

    // Tig Acier
    if (typeMateriau.value === "acier") {
      metalApport.innerHTML = "";
      metalApport.innerHTML += '<option value="acier">Acier</option>';
      typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';

      // Tig Inox
    } else if (typeMateriau.value === "inox") {
      metalApport.innerHTML = "";
      metalApport.innerHTML += '<option value="inox">Inox</option>';
      typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';

      // Tig Aluminium
    } else if (typeMateriau.value === "aluminium") {
      metalApport.innerHTML = "";
      metalApport.innerHTML += '<option value="aluminium">Aluminium</option>';
      typeCourant.innerHTML += '<option value="continu_Alternatif">Courant Alternatif</option>';
    }
  });
}
module.exports = afficherTIG;
},{}],"js/afficherChampsSupplementaires.js":[function(require,module,exports) {
//* FONCTION AFFICHER CHAMPS SUPPLEMENTAIRES *//

// Import des fichiers
var afficherArc = require("./fichiersConditionAffichChamSuppl.js/arc");
var afficherMAG = require("./fichiersConditionAffichChamSuppl.js/mag");
var afficherMIG = require("./fichiersConditionAffichChamSuppl.js/mig");
var afficherTIG = require("./fichiersConditionAffichChamSuppl.js/tig");

// Récupérer l'élément select
var typeSoudureSelect = document.getElementById("typeSoudure");

// Ecouteurs d'évenements au change
typeSoudureSelect.addEventListener("change", afficherChampsSupplementaires);
function afficherChampsSupplementaires() {
  var typeSoudure = document.getElementById("typeSoudure").value;
  var typeMateriau = document.getElementById("typeMateriau");
  var diametreElectrode = document.getElementById("diametreElectrode");
  var typeElectrode = document.getElementById("typeElectrode");
  var typeCourant = document.getElementById("typeCourant");
  var champsArc = document.getElementById("champsArc");
  var champsMIG = document.getElementById("champsMIG");
  var champsMAG = document.getElementById("champsMAG");
  var champsTIG = document.getElementById("champsTIG");
  var metalApport = document.getElementById("metalApport");

  // Masquer tous les champs supplémentaires
  champsArc.style.display = "none";
  champsMIG.style.display = "none";
  champsMAG.style.display = "none";
  champsTIG.style.display = "none";
  metalApport.style.display = "none";

  // Réinitialiser les options du type de matériau
  typeMateriau.innerHTML = '<option value=""></option>';

  // Réinitialiser et désactiver les options du type de courant
  typeCourant.innerHTML = '<option value="" disabled selected hidden></option>';
  typeCourant.disabled = true;

  // *ARC*//
  if (typeSoudure === "arc") {
    afficherArc();

    // *MIG*//
  } else if (typeSoudure === "mig") {
    afficherMIG();
  }

  // *MAG*//
  else if (typeSoudure === "mag") {
    afficherMAG();
  }

  // *TIG*//
  else if (typeSoudure === "tig") {
    afficherTIG();
  }
}
module.exports = afficherChampsSupplementaires;
},{"./fichiersConditionAffichChamSuppl.js/arc":"js/fichiersConditionAffichChamSuppl.js/arc.js","./fichiersConditionAffichChamSuppl.js/mag":"js/fichiersConditionAffichChamSuppl.js/mag.js","./fichiersConditionAffichChamSuppl.js/mig":"js/fichiersConditionAffichChamSuppl.js/mig.js","./fichiersConditionAffichChamSuppl.js/tig":"js/fichiersConditionAffichChamSuppl.js/tig.js"}],"js/buttonRefresh.js":[function(require,module,exports) {
//* FONCTION BOUTTON REFRESH *//

function ajouterBoutonRefresh() {
  // Créer un bouton
  var bouton = document.createElement("button");

  // Ajouter une classe au bouton
  bouton.classList.add("boutonRefresh");
  bouton.textContent = "Nouvelle recherche";

  // Ajouter un gestionnaire d'événements pour le clic sur le bouton
  bouton.addEventListener("click", function () {
    maFonction();
  });

  // Ajouter le bouton au corps du document
  document.body.appendChild(bouton);
}

// La fonction à exécuter lorsque le bouton est cliqué
function maFonction() {
  if (window.confirm("Êtes-vous sûr de vouloir quitter la page ?")) {
    window.location.reload();
  } else {
    alert("Opération annulée !");
  }
}
module.exports = ajouterBoutonRefresh;
},{}],"js/afficherTableauResultats.js":[function(require,module,exports) {
//* FONCTION AFFICHER TABLEAU RESULTATS

// Import de mes fichiers
var ajouterBoutonRefresh = require("./buttonRefresh");
function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
  var typeAvance = tableau[0][1];
  var resultatDiv = document.getElementById("resultats");

  // Afficher la fenêtre de résultats
  resultatDiv.style.display = "block";

  // Flouter l'arrière-plan
  document.body.classList.add("modal-open");

  // Animation fenêtre
  document.getElementById("resultats").classList.add("show");

  // Nettoyer le contenu précédent
  resultatDiv.innerHTML = "";
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  tableau.forEach(function (rowData) {
    // Vérifier si la valeur de la deuxième colonne est définie
    if (typeof rowData[1] !== "undefined") {
      var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      cell1.appendChild(document.createTextNode(rowData[0]));
      var cell2 = document.createElement("td");
      cell2.appendChild(document.createTextNode(rowData[1]));
      row.appendChild(cell1);
      row.appendChild(cell2);
      tbody.appendChild(row);
    }
  });

  // Conditions pour afficher le choix du type d'avance
  var vitesseLabel;
  if (typeAvance === "arc" || typeAvance === "tig") {
    vitesseLabel = "Vitesse d'avance";
  } else if (typeAvance === "mag" || typeAvance === "mig") {
    vitesseLabel = "Vitesse de fil";
  }

  // Ajouter les lignes pour amperage, intensite et vitesse de fil
  var amperageRow = document.createElement("tr");
  var amperageCell1 = document.createElement("td");
  amperageCell1.appendChild(document.createTextNode("Ampérage"));
  var amperageCell2 = document.createElement("td");
  amperageCell2.appendChild(document.createTextNode("".concat(amperage.min, "A - ").concat(amperage.max, "A")));
  amperageRow.appendChild(amperageCell1);
  amperageRow.appendChild(amperageCell2);
  tbody.appendChild(amperageRow);
  var intensiteRow = document.createElement("tr");
  var intensiteCell1 = document.createElement("td");
  intensiteCell1.appendChild(document.createTextNode("Intensité"));
  var intensiteCell2 = document.createElement("td");
  intensiteCell2.appendChild(document.createTextNode("".concat(intensite.min, "A - ").concat(intensite.max, "A")));
  intensiteRow.appendChild(intensiteCell1);
  intensiteRow.appendChild(intensiteCell2);
  tbody.appendChild(intensiteRow);
  var vitesseFilRow = document.createElement("tr");
  var vitesseFilCell1 = document.createElement("td");

  // Affichage de la condition vitesse
  vitesseFilCell1.appendChild(document.createTextNode(vitesseLabel));
  var vitesseFilCell2 = document.createElement("td");
  vitesseFilCell2.appendChild(document.createTextNode("".concat(vitesseFil.min, "A - ").concat(vitesseFil.max, "A")));
  vitesseFilRow.appendChild(vitesseFilCell1);
  vitesseFilRow.appendChild(vitesseFilCell2);
  tbody.appendChild(vitesseFilRow);
  table.appendChild(tbody);
  resultatDiv.appendChild(table);

  //* FONCTION BOUTTON REFRESH *//
  ajouterBoutonRefresh();
}
module.exports = afficherTableauResultats;
},{"./buttonRefresh":"js/buttonRefresh.js"}],"../../backend/data/dataArc.js":[function(require,module,exports) {
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

var optionsDatabaseArc = {
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
                          intensite: {
                            min: 50,
                            max: 100
                          },
                          amperage: {
                            min: 70,
                            max: 120
                          },
                          vitesseFil: {
                            min: 3,
                            max: 6
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            basique: {
              diametre: {
                1.2: {
                  position: {
                    plat_penetration: {
                      typeCourant: {
                        continu_Negatif: {
                          intensite: {
                            min: 6000,
                            max: 110
                          },
                          amperage: {
                            min: 8000,
                            max: 130
                          },
                          vitesseFil: {
                            min: 3.2,
                            max: 6.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
                          intensite: {
                            min: 400,
                            max: 80
                          },
                          amperage: {
                            min: 600,
                            max: 100
                          },
                          vitesseFil: {
                            min: 2.5,
                            max: 5
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            basique: {
              diametre: {
                1.2: {
                  position: {
                    plat_penetration: {
                      typeCourant: {
                        continu_Negatif: {
                          intensite: {
                            min: 500000,
                            max: 90
                          },
                          amperage: {
                            min: 70000,
                            max: 110
                          },
                          vitesseFil: {
                            min: 2.8,
                            max: 5.3
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
                          intensite: {
                            min: 6000,
                            max: 110
                          },
                          amperage: {
                            min: 8000,
                            max: 130
                          },
                          vitesseFil: {
                            min: 3000,
                            max: 6
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            basique: {
              diametre: {
                1.2: {
                  position: {
                    plat_penetration: {
                      typeCourant: {
                        continu_Negatif: {
                          intensite: {
                            min: 0,
                            max: 120
                          },
                          amperage: {
                            min: 0,
                            max: 140
                          },
                          vitesseFil: {
                            min: 0,
                            max: 6.8
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
module.exports = optionsDatabaseArc;
},{}],"../../backend/data/dataMig.js":[function(require,module,exports) {
var optionsDatabaseMig = {
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
                      intensite: {
                        min: 0,
                        max: 1
                      },
                      amperage: {
                        min: 0,
                        max: 2
                      },
                      vitesseFil: {
                        min: 3,
                        max: 6
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
module.exports = optionsDatabaseMig;
},{}],"../../backend/data/dataMag.js":[function(require,module,exports) {
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
var optionsDatabaseMag = {
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
                      intensite: {
                        min: 100,
                        max: 1
                      },
                      amperage: {
                        min: 100,
                        max: 2
                      },
                      vitesseFil: {
                        min: 300,
                        max: 6
                      }
                    }
                  }
                }
              }
            },
            1.2: {
              position: {
                plat_penetration: {
                  typeCourant: {
                    continu_Positif: {
                      fil: "fourré",
                      intensite: {
                        min: 120,
                        max: 1.5
                      },
                      amperage: {
                        min: 90,
                        max: 1.8
                      },
                      vitesseFil: {
                        min: 280,
                        max: 5.5
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
                      intensite: {
                        min: 1010,
                        max: 1.2
                      },
                      amperage: {
                        min: 1100,
                        max: 2.2
                      },
                      vitesseFil: {
                        min: 3200,
                        max: 6.5
                      }
                    }
                  }
                }
              }
            },
            1.2: {
              position: {
                plat_penetration: {
                  typeCourant: {
                    continu_Positif: {
                      fil: "fourré",
                      intensite: {
                        min: 130,
                        max: 1.7
                      },
                      amperage: {
                        min: 100,
                        max: 2.0
                      },
                      vitesseFil: {
                        min: 300,
                        max: 6.0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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
},{}],"../../backend/data/dataTig.js":[function(require,module,exports) {
//

var optionsDatabaseTig = {
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
                      intensite: {
                        min: 80,
                        max: 1.2
                      },
                      amperage: {
                        min: 80,
                        max: 1.5
                      },
                      vitesseFil: {
                        min: 200,
                        max: 3.5
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
                      intensite: {
                        min: 90,
                        max: 1.5
                      },
                      amperage: {
                        min: 90,
                        max: 1.8
                      },
                      vitesseFil: {
                        min: 220,
                        max: 4.0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
                      intensite: {
                        min: 85,
                        max: 1.4
                      },
                      amperage: {
                        min: 85,
                        max: 1.7
                      },
                      vitesseFil: {
                        min: 210,
                        max: 3.8
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
module.exports = optionsDatabaseTig;
},{}],"js/fichierConditionsBdd.js/getOptionsArc.js":[function(require,module,exports) {
var optionsDatabaseArc = require("../../../../backend/data/dataArc");
function getOptionsArc(optionsDatabaseArc, typeSoudure, typeMateriau, epaisseur, typeElectrode, diametreElectrode, positionSoudure, typeCourant) {
  if (optionsDatabaseArc[typeSoudure] && optionsDatabaseArc[typeSoudure][typeMateriau] && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur] && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode] && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode] && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position[positionSoudure] && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position[positionSoudure].typeCourant && optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position[positionSoudure].typeCourant[typeCourant]) {
    intensite = optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position[positionSoudure].typeCourant[typeCourant].intensite;
    amperage = optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position[positionSoudure].typeCourant[typeCourant].amperage;
    vitesseFil = optionsDatabaseArc[typeSoudure][typeMateriau].epaisseur[epaisseur].baguettes[typeElectrode].diametre[diametreElectrode].position[positionSoudure].typeCourant[typeCourant].vitesseFil;
    return {
      intensite: intensite,
      amperage: amperage,
      vitesseFil: vitesseFil
    };
  }
  return null;
}
module.exports = getOptionsArc;
},{"../../../../backend/data/dataArc":"../../backend/data/dataArc.js"}],"js/fichierConditionsBdd.js/getOptionsMig.js":[function(require,module,exports) {
var optionsDatabaseMig = require("../../../../backend/data/dataMig");
function getOptionsMig(optionsDatabaseMig, typeSoudure, typeMateriau, epaisseur, diametreFil, positionSoudure, typeCourant) {
  if (optionsDatabaseMig[typeSoudure] && optionsDatabaseMig[typeSoudure][typeMateriau] && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur] && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil] && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position[positionSoudure] && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position[positionSoudure].typeCourant && optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position[positionSoudure].typeCourant[typeCourant]) {
    intensite = optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position[positionSoudure].typeCourant[typeCourant].intensite;
    amperage = optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position[positionSoudure].typeCourant[typeCourant].amperage;
    vitesseFil = optionsDatabaseMig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFil[diametreFil].position[positionSoudure].typeCourant[typeCourant].vitesseFil;
    return {
      intensite: intensite,
      amperage: amperage,
      vitesseFil: vitesseFil
    };
  }
  return null;
}
module.exports = getOptionsMig;
},{"../../../../backend/data/dataMig":"../../backend/data/dataMig.js"}],"js/fichierConditionsBdd.js/getOptionsMag.js":[function(require,module,exports) {
var optionsDatabaseMag = require("../../../../backend/data/dataMag");
function getOptionsMag(optionsDatabaseMag, typeSoudure, typeMateriau, epaisseur, diametreFilMag, positionSoudure, typeCourant) {
  if (optionsDatabaseMag[typeSoudure] && optionsDatabaseMag[typeSoudure][typeMateriau] && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur] && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag] && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position[positionSoudure] && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant && optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[typeCourant]) {
    intensite = optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[typeCourant].intensite;
    amperage = optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[typeCourant].amperage;
    vitesseFil = optionsDatabaseMag[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreFilMag[diametreFilMag].position[positionSoudure].typeCourant[typeCourant].vitesseFil;
    return {
      intensite: intensite,
      amperage: amperage,
      vitesseFil: vitesseFil
    };
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
},{"../../../../backend/data/dataMag":"../../backend/data/dataMag.js"}],"js/fichierConditionsBdd.js/getOptionsTig.js":[function(require,module,exports) {
var optionsDatabaseTig = require("../../../../backend/data/dataTig");
function getOptionsTig(optionsDatabaseTig, typeSoudure, typeMateriau, epaisseur, diametreTungstene, positionSoudure, typeCourant, metalApport) {
  if (optionsDatabaseTig[typeSoudure] && optionsDatabaseTig[typeSoudure][typeMateriau] && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur] && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene[diametreTungstene] && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene[diametreTungstene].position && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene[diametreTungstene].position[positionSoudure] && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene[diametreTungstene].position[positionSoudure].typeCourant && optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene[diametreTungstene].position[positionSoudure].typeCourant[typeCourant]) {
    var options = optionsDatabaseTig[typeSoudure][typeMateriau].epaisseur[epaisseur].diametreTungstene[diametreTungstene].position[positionSoudure].typeCourant[typeCourant];
    var intensite = options.intensite,
      amperage = options.amperage,
      vitesseFil = options.vitesseFil,
      electrode = options.electrode;
    return {
      intensite: intensite,
      amperage: amperage,
      vitesseFil: vitesseFil,
      electrode: electrode,
      metalApport: metalApport
    };
  }
  return null;
}
module.exports = getOptionsTig;
},{"../../../../backend/data/dataTig":"../../backend/data/dataTig.js"}],"js/rechercher.js":[function(require,module,exports) {
// //* FONCTION RECHERCHER *//

// Import de mes fichiers
var optionsDatabaseArc = require("../../../backend/data/dataArc");
var optionsDatabaseMig = require("../../../backend/data/dataMig");
var optionsDatabaseMag = require("../../../backend/data/dataMag");
var optionsDatabaseTig = require("../../../backend/data/dataTig");
var getOptionsArc = require("./fichierConditionsBdd.js/getOptionsArc");
var getOptionsMig = require("./fichierConditionsBdd.js/getOptionsMig");
var getOptionsMag = require("./fichierConditionsBdd.js/getOptionsMag");
var getOptionsTig = require("./fichierConditionsBdd.js/getOptionsTig");

// Fonctions
function rechercher() {
  var typeSoudure = document.getElementById("typeSoudure").value;
  var typeMateriau = document.getElementById("typeMateriau").value;
  var epaisseur = parseFloat(document.getElementById("epaisseur").value);
  var diametreElectrode = parseFloat(document.getElementById("diametreElectrode").value);
  var diametreFil = document.getElementById("diametreFil").value;
  var diametreFilMAG = document.getElementById("diametreFilMAG").value;
  var typeElectrode = document.getElementById("typeElectrode").value;
  var positionSoudure = document.getElementById("positionSoudure").value;
  var typeCourant = document.getElementById("typeCourant").value;
  var typeFilMAG = document.getElementById("typeFilMAG").value;
  diametreTungstene = parseFloat(document.getElementById("diametreTungstene").value);
  var intensite, amperage, vitesseFil;
  var optionsDatabase;

  //* ARC
  if (typeSoudure === "arc") {
    optionsDatabase = optionsDatabaseArc;
    var options = getOptionsArc(optionsDatabase, typeSoudure, typeMateriau, epaisseur, typeElectrode, diametreElectrode, positionSoudure, typeCourant);
    if (options) {
      intensite = options.intensite;
      amperage = options.amperage;
      vitesseFil = options.vitesseFil;
      return {
        intensite: intensite,
        amperage: amperage,
        vitesseFil: vitesseFil
      };
    }
    //* MIG
  } else if (typeSoudure === "mig") {
    var _options = getOptionsMig(optionsDatabaseMig, typeSoudure, typeMateriau, epaisseur, diametreFil, positionSoudure, typeCourant);
    if (_options) {
      intensite = _options.intensite;
      amperage = _options.amperage;
      vitesseFil = _options.vitesseFil;
      return {
        intensite: intensite,
        amperage: amperage,
        vitesseFil: vitesseFil
      };
    }
    //* MAG
  } else if (typeSoudure === "mag") {
    optionsDatabase = optionsDatabaseMag;
    var _options2 = getOptionsMag(optionsDatabase, typeSoudure, typeMateriau, epaisseur, diametreFilMAG, positionSoudure, typeCourant, typeFilMAG);
    if (_options2) {
      intensite = _options2.intensite;
      amperage = _options2.amperage;
      vitesseFil = _options2.vitesseFil;
      return {
        intensite: intensite,
        amperage: amperage,
        vitesseFil: vitesseFil
      };
    }
  } //* TIG
  else if (typeSoudure === "tig") {
    // Si c'est une soudure TIG
    optionsDatabase = optionsDatabaseTig;
    var _options3 = getOptionsTig(optionsDatabase, typeSoudure, typeMateriau, epaisseur, diametreTungstene, positionSoudure, typeCourant);
    if (_options3) {
      intensite = _options3.intensite;
      amperage = _options3.amperage;
      vitesseFil = _options3.vitesseFil;
      return {
        intensite: intensite,
        amperage: amperage,
        vitesseFil: vitesseFil
      };
    }
  }
  console.error("Type de soudure non pris en charge : " + typeSoudure);
  return null;
}
module.exports = rechercher;
},{"../../../backend/data/dataArc":"../../backend/data/dataArc.js","../../../backend/data/dataMig":"../../backend/data/dataMig.js","../../../backend/data/dataMag":"../../backend/data/dataMag.js","../../../backend/data/dataTig":"../../backend/data/dataTig.js","./fichierConditionsBdd.js/getOptionsArc":"js/fichierConditionsBdd.js/getOptionsArc.js","./fichierConditionsBdd.js/getOptionsMig":"js/fichierConditionsBdd.js/getOptionsMig.js","./fichierConditionsBdd.js/getOptionsMag":"js/fichierConditionsBdd.js/getOptionsMag.js","./fichierConditionsBdd.js/getOptionsTig":"js/fichierConditionsBdd.js/getOptionsTig.js"}],"js/calculer.js":[function(require,module,exports) {
//* FONCTION CALCULER *//

// Import de mes fichiers
var afficherTableauResultats = require("./afficherTableauResultats");
var rechercher = require("./rechercher");

// Récupérer le bouton de calcul
var calculerButton = document.querySelector("button");

// Ajouter un écouteur d'événements pour le clic
calculerButton.addEventListener("click", function () {
  calculer();
});

// Fonctions
function calculer() {
  // Déclaration de la variable diametreTungstene
  var diametreTungstene;
  // Vérifier si tous les champs sont remplis
  var champsRemplis = true;
  var champsRequis = ["typeSoudure", "typeMateriau", "epaisseur"];

  // Si le type de soudure est "arc", ajouter les champs de l'arc au tableau des champs requis
  if (document.getElementById("typeSoudure").value === "arc") {
    champsRequis.push("diametreElectrode");
    champsRequis.push("typeElectrode");

    // Si le type de soudure est "mig", ajouter le champ "diametreFil" aux champs requis
  } else if (document.getElementById("typeSoudure").value === "mig") {
    champsRequis.push("diametreFil");

    // Si le type de soudure est "mag", ajouter le champ "diametreFilMAG" aux champs requis
  } else if (document.getElementById("typeSoudure").value === "mag") {
    champsRequis.push("diametreFilMAG");
    champsRequis.push("typeFilMAG"); // Ajout pour options fil plein fil fourre

    // Si le type de soudure est "tig", ajouter les champs du tig au tableau des champs requis
  } else if (document.getElementById("typeSoudure").value === "tig") {
    champsRequis.push("diametreTungstene");
    champsRequis.push("metalApport");
  }

  // Si tous les champs ne sont pas remplis, afficher un message d'alerte et arrêter la fonction
  champsRequis.forEach(function (champ) {
    if (document.getElementById(champ).value === "") {
      champsRemplis = false;
      return;
    }
  });
  if (!champsRemplis) {
    alert("Veuillez remplir tous les champs avant de procéder au calcul.");
    return;
  }

  // Rechercher les options dans la base de données
  var optionsTrouvees = rechercher();
  if (optionsTrouvees) {
    // Récupérer les valeurs des autres champs
    var typeSoudure = document.getElementById("typeSoudure").value;
    var typeMateriau = document.getElementById("typeMateriau").value;
    var epaisseur = document.getElementById("epaisseur").value;

    // Définir les variables spécifiques à chaque type de soudure
    var diametreElectrode, typeElectrode, diametreFil, diametreFilMAG, diametreTungstene, metalApport;

    //* ARC *//
    if (typeSoudure === "arc") {
      diametreElectrode = document.getElementById("diametreElectrode").value;
      typeElectrode = document.getElementById("typeElectrode").value;

      //*MIG
    } else if (typeSoudure === "mig") {
      diametreFil = document.getElementById("diametreFil").value;

      //*MAG
    } else if (typeSoudure === "mag") {
      diametreFilMAG = document.getElementById("diametreFilMAG").value;
      typeFilMAG = document.getElementById("typeFilMAG").value;

      //* TIG
    } else if (typeSoudure === "tig") {
      diametreTungstene = document.getElementById("diametreTungstene").value;
      metalApport = document.getElementById("metalApport").value;
    }

    // Tableau avec les valeurs récupérées
    var tableauResultats = [["Type de Soudure", typeSoudure], ["Type de Matériau", typeMateriau], ["Épaisseur du Matériau (mm)", epaisseur]];

    // Ajouter les valeurs spécifiques à chaque type de soudure dans le tableau de résultats
    //* ARC
    if (typeSoudure === "arc") {
      tableauResultats.push(["Diamètre de la Baguette (mm)", diametreElectrode]);
      tableauResultats.push(["Type de Baguette", typeElectrode]);
      //* MIG
    } else if (typeSoudure === "mig") {
      tableauResultats.push(["Diamètre du Fil (mm)", diametreFil]);
      //* MAG
    } else if (typeSoudure === "mag") {
      tableauResultats.push(["Diamètre du Fil MAG (mm)", diametreFilMAG]);
      tableauResultats.push(["Type de Fil MAG", typeFilMAG]);
      //* TIG
    } else if (typeSoudure === "tig") {
      tableauResultats.push(["Diamètre du Tungstène (mm)", diametreTungstene]);
      tableauResultats.push(["Métal d'Apport", metalApport]);
    }

    // Extraire les valeurs d'intensité, d'amperage et de vitesse de fil
    var amperage = optionsTrouvees.amperage;
    var intensite = optionsTrouvees.intensite;
    var vitesseFil = optionsTrouvees.vitesseFil;

    // Afficher le tableau dans la page HTML avec les valeurs d'intensité, d'amperage et de vitesse de fil
    afficherTableauResultats(tableauResultats, amperage, intensite, vitesseFil);
  } else {
    alert("Les options sélectionnées ne sont pas disponibles dans la base de données.");
  }
}
},{"./afficherTableauResultats":"js/afficherTableauResultats.js","./rechercher":"js/rechercher.js"}],"js/baseDeDonneesArc.js":[function(require,module,exports) {
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
},{}],"js/index.js":[function(require,module,exports) {
//* IMPORTATION DES FONCTIONS *//

var afficherChampsSupplementaires = require("./afficherChampsSupplementaires");
var calculer = require("./calculer");
var afficherTableauResultats = require("./afficherTableauResultats");
var optionsDatabaseArc = require("./baseDeDonneesArc");
},{"./afficherChampsSupplementaires":"js/afficherChampsSupplementaires.js","./calculer":"js/calculer.js","./afficherTableauResultats":"js/afficherTableauResultats.js","./baseDeDonneesArc":"js/baseDeDonneesArc.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51826" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map