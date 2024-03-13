// Middleware pour valider le token JWT
exports.validateToken = (req, res, next) => {
	// Récupérer le token JWT depuis le header Authorization
	const token = req.headers.authorization;

	// Vérifier si le token existe
	if (!token) {
		return res.status(401).json({ error: "Token non fourni" });
	}

	// Ajouter la logique de validation et de décryptage du token JWT
	// ...

	// Si le token est valide, passer au middleware suivant ou au gestionnaire de route
	next();
};

// Middleware pour vérifier l'authentification de l'utilisateur
// exports.authenticateUser = (req, res, next) => {
// 	// Exemple de logique d'authentification : vérifier si l'utilisateur est connecté
// 	if (!req.user) {
// 		return res.status(401).json({ error: "Accès non autorisé" });
// 	}
// 	// Si l'utilisateur est authentifié, passer au middleware suivant ou au gestionnaire de route
// 	next();
// };

// Middleware pour récupérer les informations de la base de données
exports.retrieveDataFromDatabase = (req, res, next) => {
	// Récupération de données de la base de données
	db.Product.findAll()
		.then(products => {
			req.products = products;
			next();
		})
		.catch(err => {
			console.error(
				"Erreur lors de la récupération des données de la base de données :",
				err,
			);
			return res.status(500).json({ error: "Erreur serveur" });
		});
};
