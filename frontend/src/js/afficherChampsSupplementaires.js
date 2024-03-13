//* FONCTION AFFICHER CHAMPS SUPPLEMENTAIRES *//

// Import des fichiers
const afficherArc = require("./fichiersConditionAffichChamSuppl.js/arc");
const afficherMAG = require("./fichiersConditionAffichChamSuppl.js/mag");
const afficherMIG = require("./fichiersConditionAffichChamSuppl.js/mig");
const afficherTIG = require("./fichiersConditionAffichChamSuppl.js/tig");

// Récupérer l'élément select
const typeSoudureSelect = document.getElementById("typeSoudure");

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
