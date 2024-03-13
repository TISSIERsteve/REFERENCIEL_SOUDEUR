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
			typeCourant.innerHTML +=
				'<option value="continu_Negatif">Courant Continu Négatif</option>';
		}
	});
}

module.exports = afficherMIG;
