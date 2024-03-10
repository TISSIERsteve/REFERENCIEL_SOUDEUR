//* FONCTION AFFICHER CHAMPS SUPPLEMENTAIRES *//

// Récupérer l'élément select
const typeSoudureSelect = document.getElementById("typeSoudure");

// Ecouteurs d'évenements au change
typeSoudureSelect.addEventListener("change", afficherChampsSupplementaires);

// Définir la fonction afficherChampsSupplementaires

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

			// Ajouter les options de courant appropriées en fonction de la baguette
			if (typeElectrode.value === "rutile") {
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';
			} else if (typeElectrode.value === "basique") {
				typeCourant.innerHTML +=
					'<option value="continu_Positif">Courant Continu Positif</option>';
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';
			}
		});

		// *MIG*//
	} else if (typeSoudure === "mig") {
		champsMIG.style.display = "block";

		// Désactiver les champs non nécessaires
		typeElectrode.disabled = true;
		diametreElectrode.disabled = true;

		typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';

		typeMateriau.addEventListener("change", function () {
			typeCourant.disabled = false;
			typeCourant.innerHTML = "";
			if (typeMateriau.value === "aluminium") {
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';
			}
		});
	}

	// *MAG*//
	else if (typeSoudure === "mag") {
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
			if (typeMateriau.value === "acier" || typeMateriau.value === "inox") {
				typeCourant.innerHTML +=
					'<option value="continu_Positif">Courant Continu Positif</option>';
			}
		});
	}

	// *TIG*//
	else if (typeSoudure === "tig") {
		champsTIG.style.display = "block";
		metalApport.style.display = "block";

		// Ajouter les options appropriées pour la soudure TIG
		typeMateriau.innerHTML += '<option value="acier">Acier</option>';
		typeMateriau.innerHTML += '<option value="aluminium">Aluminium</option>';
		typeMateriau.innerHTML += '<option value="inox">Acier Inoxydable</option>';

		typeMateriau.addEventListener("change", function () {
			typeCourant.disabled = false;
			typeCourant.innerHTML = "";

			//* ACIER
			if (typeMateriau.value === "acier") {
				metalApport.innerHTML = "";
				metalApport.innerHTML += '<option value="acier">Acier</option>';
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';

				//* INOX
			} else if (typeMateriau.value === "inox") {
				metalApport.innerHTML = "";
				metalApport.innerHTML += '<option value="inox">Inox</option>';
				typeCourant.innerHTML +=
					'<option value="continu_Negatif">Courant Continu Négatif</option>';

				//* ALUMINIUM
			} else if (typeMateriau.value === "aluminium") {
				metalApport.innerHTML = "";
				metalApport.innerHTML += '<option value="aluminium">Aluminium</option>';
				typeCourant.innerHTML +=
					'<option value="continu_Alternatif">Courant Alternatif</option>';
			}
		});
	}
}
module.exports = afficherChampsSupplementaires;
