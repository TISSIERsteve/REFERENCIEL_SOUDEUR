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
			typeCourant.innerHTML +=
				'<option value="continu_Negatif">Courant Continu Négatif</option>';

			// Tig Inox
		} else if (typeMateriau.value === "inox") {
			metalApport.innerHTML = "";
			metalApport.innerHTML += '<option value="inox">Inox</option>';
			typeCourant.innerHTML +=
				'<option value="continu_Negatif">Courant Continu Négatif</option>';

			// Tig Aluminium
		} else if (typeMateriau.value === "aluminium") {
			metalApport.innerHTML = "";
			metalApport.innerHTML += '<option value="aluminium">Aluminium</option>';
			typeCourant.innerHTML +=
				'<option value="continu_Alternatif">Courant Alternatif</option>';
		}
	});
}

module.exports = afficherTIG;
