// Fonction pour récupérer tous les produits
exports.getAllProducts = (req, res) => {
	db.query("SELECT * FROM products", (err, results) => {
		if (err) {
			console.error("Erreur lors de la récupération des produits :", err);
			return res.status(500).json({ error: "Erreur serveur" });
		}
		res.status(200).json(results);
	});
};
