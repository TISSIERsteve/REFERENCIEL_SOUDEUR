const express = require("express");
const app = express();
const productRoutes = require("./routes/product.routes");

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Montage des routes
app.use("/api", productRoutes);

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Erreur serveur");
});

module.exports = app;
