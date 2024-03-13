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
			typeCourant.innerHTML +=
				'<option value="continu_Positif">Courant Continu Positif</option>';
		}
	});
}

module.exports = afficherMAG;
