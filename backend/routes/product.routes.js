const express = require("express");
const router = express.Router();
const databaseMiddleware = require("../middleware/database.middleware");

// Route pour récupérer tous les produits
router.get(
	"/products",
	databaseMiddleware.retrieveDataFromDatabase,
	(req, res) => {
		const products = req.products;

		// Répondre avec les produits récupérés
		res.json(products);
	},
);

module.exports = router;
