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
})({"js/afficherChampsSupplementaires.js":[function(require,module,exports) {
//* FONCTION AFFICHER CHAMPS SUPPLEMENTAIRES *//

// Récupérer l'élément select
var typeSoudureSelect = document.getElementById("typeSoudure");

// Ajouter un écouteur d'événements pour le changement
typeSoudureSelect.addEventListener("change", afficherChampsSupplementaires);

// Définir la fonction afficherChampsSupplementaires
function afficherChampsSupplementaires() {}
function afficherChampsSupplementaires() {
  var typeSoudure = document.getElementById("typeSoudure").value;
  var typeElectrode = document.getElementById("typeElectrode");
  var typeCourant = document.getElementById("typeCourant");
  var champsArc = document.getElementById("champsArc");
  var champsMIG = document.getElementById("champsMIG");
  var champsMAG = document.getElementById("champsMAG");
  var champsTIG = document.getElementById("champsTIG");
  var typeMateriau = document.getElementById("typeMateriau");

  // Masquer tous les champs supplémentaires
  champsArc.style.display = "none";
  champsMIG.style.display = "none";
  champsMAG.style.display = "none";
  champsTIG.style.display = "none";

  // Réinitialiser les options du type de matériau
  typeMateriau.innerHTML = '<option value=""></option>';

  // Réinitialiser et désactiver les options du type de courant
  typeCourant.innerHTML = '<option value="" disabled selected hidden></option>';
  typeCourant.disabled = true;

  // Afficher les champs supplémentaires en fonction du type de soudure sélectionné
  // *ARC*//
  if (typeSoudure === "arc") {
    champsArc.style.display = "block";

    // Désactiver les champs non nécessaires
    typeElectrode.innerHTML = '<option value=""></option>';
    champsMIG.innerHTML = '<option value=""></option>';
    champsMAG.innerHTML = '<option value=""></option>';
    champsTIG.innerHTML = '<option value=""></option>';
    typeElectrode.innerHTML += '<option value="rutile">Rutile</option>';
    typeElectrode.innerHTML += '<option value="basique">Basique</option>';
    typeMateriau.innerHTML += '<option value="acier">Acier</option>';
    typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
    typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';
    typeElectrode.addEventListener("change", function () {
      typeCourant.disabled = false;
      typeCourant.innerHTML = ""; // Effacer les options précédentes
      if (typeElectrode.value === "rutile") {
        typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';
      } else if (typeElectrode.value === "basique") {
        typeCourant.innerHTML += '<option value="continu_Positif">Courant Continu Positif</option>';
        typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';
      }
    });

    // *MIG*//
  } else if (typeSoudure === "mig") {
    champsMIG.style.display = "block";
    typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
    typeMateriau.addEventListener("change", function () {
      typeCourant.disabled = false;
      typeCourant.innerHTML = ""; // Effacer les options précédentes
      if (typeMateriau.value === "aluminium") {
        typeCourant.innerHTML += '<option value="continu_Negatif">Courant Continu Négatif</option>';
      }
    });
  }

  // *MAG*//
  else if (typeSoudure === "mag") {
    champsMAG.style.display = "block";
    typeMateriau.innerHTML += '<option value="acier">Acier</option>';
    typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';
    typeMateriau.addEventListener("change", function () {
      typeCourant.disabled = false;
      typeCourant.innerHTML = ""; // Effacer les options précédentes
      if (typeMateriau.value === "acier" || typeMateriau.value === "inox") {
        typeCourant.innerHTML += '<option value="continu_Positif">Courant Continu Positif</option>';
      }
    });
  }
  // *TIG*//
  else if (typeSoudure === "tig") {
    champsTIG.style.display = "block";
    // Ajouter les options appropriées pour la soudure TIG
    typeMateriau.innerHTML += '<option value="acier">Acier</option>';
    typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
    typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';
    typeMateriau.addEventListener("change", function () {
      typeCourant.disabled = false;
      typeCourant.innerHTML = ""; // Effacer les options précédentes
      if (typeMateriau.value === "acier" || typeMateriau.value === "inox") {
        typeCourant.innerHTML += '<option value="continu_Positif">Courant Continu Positif</option>';
      } else if (typeMateriau.value === "aluminium") {
        typeCourant.innerHTML += '<option value="continu_Alternatif">Courant Alternatif</option>';
      }
    });
  }
}
module.exports = afficherChampsSupplementaires;
},{}],"js/afficherTableauResultats.js":[function(require,module,exports) {
//* FONCTION AFFICHER TABLEAU RESULTAT *//

function afficherTableauResultats(tableau, amperage, intensite, vitesseFil) {
  var resultatDiv = document.getElementById("resultats");
  resultatDiv.innerHTML = ""; // Nettoyer le contenu précédent

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  tableau.forEach(function (rowData) {
    var row = document.createElement("tr");
    rowData.forEach(function (cellData) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  resultatDiv.appendChild(table);

  // Afficher les résultats passés en paramètres
  var infoDiv = document.createElement("div");
  infoDiv.innerHTML =
  //
  "Votre ampérage doit être de : " + amperage.min + "A" + " et " + amperage.max + "A" + "<br>" +
  //
  "Votre intensité doit être de : " + intensite.min + "A" + " et " + intensite.max + "A" + "<br>" +
  //
  "Votre vitesse d'avance doit être de : " + vitesseFil.min + "A" + " et " + vitesseFil.max + "A";
  resultatDiv.appendChild(infoDiv);
}
module.exports = afficherTableauResultats;
},{}],"js/baseDeDonneesArc.js":[function(require,module,exports) {
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
            }
          }
        }
      }
    }
  }
};
module.exports = optionsDatabaseArc;
},{}],"js/rechercher.js":[function(require,module,exports) {
var optionsDatabaseArc = require("./baseDeDonneesArc");
function rechercher() {
  var typeSoudure = document.getElementById("typeSoudure").value;
  var typeMateriau = document.getElementById("typeMateriau").value;
  var epaisseur = parseFloat(document.getElementById("epaisseur").value);
  var diametreElectrode = parseFloat(document.getElementById("diametreElectrode").value);
  var typeElectrode = document.getElementById("typeElectrode").value;
  var positionSoudure = document.getElementById("positionSoudure").value;
  var typeCourant = document.getElementById("typeCourant").value;
  var intensite, amperage, vitesseFil;
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
  alert("Les options sélectionnées ne sont pas disponibles dans la base de données.");
  return null;
}
module.exports = rechercher;
},{"./baseDeDonneesArc":"js/baseDeDonneesArc.js"}],"js/calculer.js":[function(require,module,exports) {
var afficherTableauResultats = require("./afficherTableauResultats");
var rechercher = require("./rechercher");

// Récupérer le bouton de calcul
var calculerButton = document.querySelector("button");

// Ajouter un écouteur d'événements pour le clic
calculerButton.addEventListener("click", function () {
  calculer();
});
function calculer() {
  // Vérifier si tous les champs sont remplis
  var champsRemplis = true;
  var champsRequis = ["typeSoudure", "typeMateriau", "epaisseur", "diametreElectrode", "typeElectrode",
  // "diametreFil",
  // "diametreFilMAG",
  // "diametreTungstene",
  // "metalApport",
  "positionSoudure", "typeCourant"];
  // console.log(champsRequis);

  // Si tous les champs ne sont pas remplis, return
  //* FONCTIONNE PAS A VOIR APRES
  // champsRequis.forEach(function (champ) {
  // 	if (document.getElementById(champ).value === "") {
  // 		champsRemplis = false;
  // 		return;
  // 	}
  // });

  // Si tous les champs sont remplis, procéder au calcul
  // if (champsRemplis) { // * FONCTIONNE PAS A VOIR APRES
  if (true) {
    // Rechercher les options pertinentes dans la base de données
    var optionsTrouvees = rechercher();

    // if (optionsTrouvees) {
    // * FONCTIONNE PAS A VOIR APRES
    if (true) {
      // Récupérer les valeurs des autres champs
      var typeSoudure = document.getElementById("typeSoudure").value;
      var typeMateriau = document.getElementById("typeMateriau").value;
      var epaisseur = document.getElementById("epaisseur").value;
      var diametreElectrode = document.getElementById("diametreElectrode").value;
      var typeElectrode = document.getElementById("typeElectrode").value;
      // var diametreFil = document.getElementById("diametreFil").value;
      // var diametreFilMAG = document.getElementById("diametreFilMAG").value;
      // var diametreTungstene =
      // document.getElementById("diametreTungstene").value;
      // var metalApport = document.getElementById("metalApport").value;
      var positionSoudure = document.getElementById("positionSoudure").value;
      var typeCourant = document.getElementById("typeCourant").value;

      // Créer un tableau avec les valeurs récupérées
      var tableauResultats = [["Type de Soudure", typeSoudure], ["Type de Matériau", typeMateriau], ["Épaisseur du Matériau (mm)", epaisseur], ["Diamètre de la Baguette (mm)", diametreElectrode], ["Type de Baguette", typeElectrode],
      // ["Diamètre du Fil (mm)", diametreFil],
      // ["Diamètre du Fil MAG (mm)", diametreFilMAG],
      // ["Diamètre du Tungstène (mm)", diametreTungstene],
      // ["Métal d'Apport", metalApport],
      ["Position de la Soudure", positionSoudure], ["Type de Courant", typeCourant]];
      // console.log("tableauResultats", tableauResultats); // * CECI FONCTIONNE

      // Extraire les valeurs d'intensité, d'amperage et de vitesse de fil
      var amperage = optionsTrouvees.amperage;
      var intensite = optionsTrouvees.intensite;
      var vitesseFil = optionsTrouvees.vitesseFil;

      // Afficher le tableau dans la page HTML avec les valeurs d'intensité, d'amperage et de vitesse de fil
      afficherTableauResultats(tableauResultats, amperage, intensite, vitesseFil);
    } else {
      alert("Les options sélectionnées ne sont pas disponibles dans la base de données.");
    }
  } else {
    alert("Veuillez remplir tous les champs avant de procéder au calcul.");
  }
}
module.exports = calculer;
},{"./afficherTableauResultats":"js/afficherTableauResultats.js","./rechercher":"js/rechercher.js"}],"js/index.js":[function(require,module,exports) {
//* IMPORTATION DES FONCTIONS *//

var afficherChampsSupplementaires = require("./afficherChampsSupplementaires");
var calculer = require("./calculer");
var afficherTableauResultats = require("./afficherTableauResultats");
var optionsDatabaseArc = require("./baseDeDonneesArc");

// console.log(optionsDatabaseArc); //
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58732" + '/');
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