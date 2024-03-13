-- Récupérer toutes les informations sur un type de soudure spécifique avec les détails de chaque relation
SELECT ts.*, m.Nom AS Materiaux, e.Valeur AS Epaisseur, bf.Type AS BaguetteFil, tp.Position AS TypePosition, c.*
FROM TypeSoudure ts
JOIN Materiaux m ON ts.ID_Materiaux = m.ID_Materiaux
JOIN Epaisseur e ON ts.ID_Epaisseur = e.ID_Epaisseur
JOIN BaguetteFil bf ON ts.ID_BaguetteFil = bf.ID_BaguetteFil
JOIN TypePosition tp ON ts.ID_TypePosition = tp.ID_TypePosition
JOIN Courant c ON ts.ID_Courant = c.ID_Courant
WHERE ts.ID_TypeSoudure = [ID_TypeSoudure];

-- Récupérer tous les types de soudure avec leurs matériaux correspondants
SELECT ts.*, m.Nom AS Materiaux
FROM TypeSoudure ts
    JOIN Materiaux m ON ts.ID_Materiaux = m.ID_Materiaux;

-- Récupérer tous les types de soudure avec une épaisseur spécifique
SELECT ts.*
FROM TypeSoudure ts
JOIN Epaisseur e ON ts.ID_Epaisseur = e.ID_Epaisseur
WHERE e.Valeur = [Valeur_Epaisseur];

-- Récupérer tous les types de soudure avec un certain matériau et une certaine épaisseur
SELECT ts.*
FROM TypeSoudure ts
JOIN Materiaux m ON ts.ID_Materiaux = m.ID_Materiaux
JOIN Epaisseur e ON ts.ID_Epaisseur = e.ID_Epaisseur
WHERE m.Nom = '[Nom_Materiau]' AND e.Valeur = [Valeur_Epaisseur];

-- Récupérer tous les types de soudure avec un certain matériau et une intensité de courant minimale spécifique
SELECT ts.*
FROM TypeSoudure ts
JOIN Materiaux m ON ts.ID_Materiaux = m.ID_Materiaux
JOIN Courant c ON ts.ID_Courant = c.ID_Courant
WHERE m.Nom = '[Nom_Materiau]' AND c.IntensiteMin >= [Intensite_Min];

-- Procédure pour insérer un nouveau type de soudure dans la base de données
DELIMITER / /

CREATE PROCEDURE AjouterTypeSoudure(IN materiau VARCHAR
(255), IN epaisseur DECIMAL(10, 2), IN baguette_fil 
VARCHAR(255), IN type_position VARCHAR(255), IN intensite_min 
DECIMAL(10, 2), IN intensite_max DECIMAL(10, 2), IN amperage_min 
DECIMAL(10, 2), IN amperage_max DECIMAL(10, 2), IN vitesse_fil_min 
DECIMAL(10, 2), IN vitesse_fil_max DECIMAL(10, 2)) 
BEGIN 
	-- Insérer le matériau s'il n'existe pas déjà dans la table Materiaux
	INSERT INTO
	    Materiaux (Nom)
	VALUES (materiau)
	ON DUPLICATE KEY UPDATE
	    Nom = Nom;
	-- Récupérer l'ID du matériau
	SET
	    @id_materiau = (
	        SELECT ID_Materiaux
	        FROM Materiaux
	        WHERE
	            Nom = materiau
	    );
	-- Insérer l'épaisseur s'il n'existe pas déjà dans la table Epaisseur
	INSERT INTO
	    Epaisseur (Valeur)
	VALUES (epaisseur)
	ON DUPLICATE KEY UPDATE
	    Valeur = Valeur;
	-- Récupérer l'ID de l'épaisseur
	SET
	    @id_epaisseur = (
	        SELECT ID_Epaisseur
	        FROM Epaisseur
	        WHERE
	            Valeur = epaisseur
	    );
	-- Insérer la baguette ou le fil s'il n'existe pas déjà dans la table BaguetteFil
	INSERT INTO
	    BaguetteFil (Type)
	VALUES (baguette_fil)
	ON DUPLICATE KEY UPDATE
	    Type = Type;
	-- Récupérer l'ID de la baguette ou du fil
	SET
	    @id_baguette_fil = (
	        SELECT ID_BaguetteFil
	        FROM BaguetteFil
	        WHERE
	            Type = baguette_fil
	    );
	-- Insérer le type de position s'il n'existe pas déjà dans la table TypePosition
	INSERT INTO
	    TypePosition (Position)
	VALUES (type_position)
	ON DUPLICATE KEY UPDATE
	    Position = Position;
	-- Récupérer l'ID du type de position
	SET
	    @id_type_position = (
	        SELECT ID_TypePosition
	        FROM TypePosition
	        WHERE
	            Position = type_position
	    );
	-- Insérer l'intensité de courant s'il n'existe pas déjà dans la table Courant
	INSERT INTO
	    Courant (
	        IntensiteMin, IntensiteMax, AmperageMin, AmperageMax, VitesseFilMin, VitesseFilMax
	    )
	VALUES (
	        intensite_min, intensite_max, amperage_min, amperage_max, vitesse_fil_min, vitesse_fil_max
	    )
	ON DUPLICATE KEY UPDATE
	    IntensiteMin = VALUES(IntensiteMin),
	    IntensiteMax = VALUES(IntensiteMax),
	    AmperageMin = VALUES(AmperageMin),
	    AmperageMax = VALUES(AmperageMax),
	    VitesseFilMin = VALUES(VitesseFilMin),
	    VitesseFilMax = VALUES(VitesseFilMax);
	-- Récupérer l'ID de l'intensité de courant
	SET @id_courant = LAST_INSERT_ID();
	-- Insérer le type de soudure dans la table TypeSoudure
	INSERT INTO
	    TypeSoudure (
	        ID_Materiaux, ID_Epaisseur, ID_BaguetteFil, ID_TypePosition, ID_Courant
	    )
	VALUES (
	        @id_materiau, @id_epaisseur, @id_baguette_fil, @id_type_position, @id_courant
	    );
END
// 

DELIMITER;