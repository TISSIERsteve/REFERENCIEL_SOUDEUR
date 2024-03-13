-- Création de la base de données pour le calculateur d'amperage de soudage
CREATE DATABASE IF NOT EXISTS CalculateurAmperageSoudage;

USE CalculateurAmperageSoudage;

-- Table pour stocker les différents matériaux utilisés dans le soudage
CREATE TABLE Materiaux (
    ID_Materiau INT PRIMARY KEY AUTO_INCREMENT, Nom VARCHAR(50) UNIQUE
);

-- Table pour stocker les différentes épaisseurs de matériaux
CREATE TABLE Epaisseurs (
    ID_Epaisseur INT PRIMARY KEY AUTO_INCREMENT, Epaisseur DECIMAL(4, 2)
);

-- Table pour stocker les différents diamètres de fil utilisés dans le soudage
CREATE TABLE DiametresFil (
    ID_DiametreFil INT PRIMARY KEY AUTO_INCREMENT, Diametre DECIMAL(3, 2)
);

-- Table pour stocker les différentes positions de soudure
CREATE TABLE PositionsSoudure (
    ID_Position INT PRIMARY KEY AUTO_INCREMENT, Nom VARCHAR(50) UNIQUE
);

-- Table pour stocker les différents types de courant utilisés dans le soudage
CREATE TABLE TypesCourant (
    ID_TypeCourant INT PRIMARY KEY AUTO_INCREMENT, Nom VARCHAR(50) UNIQUE
);

-- Table pour stocker les paramètres spécifiques au soudage à l'arc
CREATE TABLE Arc_Parametres (
    ID_Parametre INT PRIMARY KEY AUTO_INCREMENT, ID_Materiau INT, ID_Epaisseur INT, ID_DiametreFil INT, ID_Position INT, ID_TypeCourant INT, IntensiteMin INT, IntensiteMax INT, AmperageMin INT, AmperageMax INT, VitesseFilMin DECIMAL(5, 2), VitesseFilMax DECIMAL(5, 2), FOREIGN KEY (ID_Materiau) REFERENCES Materiaux (ID_Materiau), FOREIGN KEY (ID_Epaisseur) REFERENCES Epaisseurs (ID_Epaisseur), FOREIGN KEY (ID_DiametreFil) REFERENCES DiametresFil (ID_DiametreFil), FOREIGN KEY (ID_Position) REFERENCES PositionsSoudure (ID_Position), FOREIGN KEY (ID_TypeCourant) REFERENCES TypesCourant (ID_TypeCourant)
);

-- Table pour stocker les paramètres spécifiques au soudage Mig
CREATE TABLE Mig_Parametres (
    ID_Parametre INT PRIMARY KEY AUTO_INCREMENT, ID_Materiau INT, ID_Epaisseur INT, ID_DiametreFil INT, ID_Position INT, ID_TypeCourant INT, Fil VARCHAR(50), IntensiteMin INT, IntensiteMax INT, AmperageMin INT, AmperageMax INT, VitesseFilMin DECIMAL(5, 2), VitesseFilMax DECIMAL(5, 2), FOREIGN KEY (ID_Materiau) REFERENCES Materiaux (ID_Materiau), FOREIGN KEY (ID_Epaisseur) REFERENCES Epaisseurs (ID_Epaisseur), FOREIGN KEY (ID_DiametreFil) REFERENCES DiametresFil (ID_DiametreFil), FOREIGN KEY (ID_Position) REFERENCES PositionsSoudure (ID_Position), FOREIGN KEY (ID_TypeCourant) REFERENCES TypesCourant (ID_TypeCourant)
);

-- Table pour stocker les paramètres spécifiques au soudage Mag
CREATE TABLE Mag_Parametres (
    ID_Parametre INT PRIMARY KEY AUTO_INCREMENT, ID_Materiau INT, ID_Epaisseur INT, ID_DiametreFil INT, ID_Position INT, Fil VARCHAR(50), IntensiteMin INT, IntensiteMax INT, AmperageMin INT, AmperageMax INT, VitesseFilMin DECIMAL(5, 2), VitesseFilMax DECIMAL(5, 2), FOREIGN KEY (ID_Materiau) REFERENCES Materiaux (ID_Materiau), FOREIGN KEY (ID_Epaisseur) REFERENCES Epaisseurs (ID_Epaisseur), FOREIGN KEY (ID_DiametreFil) REFERENCES DiametresFil (ID_DiametreFil), FOREIGN KEY (ID_Position) REFERENCES PositionsSoudure (ID_Position)
);

-- Table pour stocker les paramètres spécifiques au soudage Tig
CREATE TABLE Tig_Parametres (
    ID_Parametre INT PRIMARY KEY AUTO_INCREMENT, ID_Materiau INT, ID_Epaisseur INT, ID_DiametreTungstene INT, MetalApport VARCHAR(50), IntensiteMin INT, IntensiteMax INT, AmperageMin INT, AmperageMax INT, VitesseFilMin DECIMAL(5, 2), VitesseFilMax DECIMAL(5, 2), FOREIGN KEY (ID_Materiau) REFERENCES Materiaux (ID_Materiau), FOREIGN KEY (ID_Epaisseur) REFERENCES Epaisseurs (ID_Epaisseur), FOREIGN KEY (ID_DiametreTungstene) REFERENCES DiametresFil (ID_DiametreFil)
);

-- Table pour stocker les utilisateurs et leurs rôles
CREATE TABLE Utilisateurs (
    ID_Utilisateur INT PRIMARY KEY AUTO_INCREMENT, Nom VARCHAR(50), MotDePasse VARCHAR(50), Role ENUM(
        'administrateur', 'utilisateur_normal'
    ) DEFAULT 'utilisateur_normal'
);