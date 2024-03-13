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
			typeCourant.innerHTML +=
				'<option value="continu_Negatif">Courant Continu Négatif</option>';

			// Arc Basique
		} else if (typeElectrode.value === "basique") {
			typeCourant.innerHTML +=
				'<option value="continu_Positif">Courant Continu Positif</option>';
			typeCourant.innerHTML +=
				'<option value="continu_Negatif">Courant Continu Négatif</option>';
		}
	});
}

module.exports = afficherArc;
