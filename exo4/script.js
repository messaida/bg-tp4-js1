"use strict"; // slide 52 : mode strict

// =====================================================
// EXERCICE 4 : Gestion d'un mini magasin
// =====================================================


// ===== Question 1 : un produit et la valeur de son stock =====

// un produit = un objet avec nom, prix et quantité (slide 40)
const produit = { nom: "Cahier", prix: 120, quantite: 40 };

// valeur du stock = prix x quantité (opérateur *, slide 42)
const valeurStock1 = produit.prix * produit.quantite;

console.log("===== 1. Un produit et la valeur de son stock ====="); // slide 34
// je montre d'abord les données du produit, backticks et ${} (slide 38)
console.log(`Nom : ${produit.nom}`);
console.log(`Prix : ${produit.prix} DA`);
console.log(`Quantité : ${produit.quantite}`);
// puis le calcul et son résultat
console.log(`Valeur du stock : ${produit.prix} x ${produit.quantite} = ${valeurStock1} DA`);


// ===== Question 2 : catalogue de 5 produits, prix au-dessus de la moyenne =====

// tableau de 5 objets (slide 41), global car déclaré hors des fonctions (slide 51)
const catalogue = [
    { nom: "Cahier", prix: 120, quantite: 40 },
    { nom: "Stylo", prix: 30, quantite: 100 },
    { nom: "Calculatrice", prix: 900, quantite: 10 },
    { nom: "Sac à dos", prix: 2500, quantite: 8 },
    { nom: "Clé USB", prix: 1200, quantite: 25 }
];

console.log("");
console.log("===== 2. Catalogue et produits au-dessus du prix moyen =====");

// d'abord j'affiche tout le catalogue, boucle for..of (slide 45)
console.log("Catalogue de 5 produits :");
for (const p of catalogue) {
    console.log(`  ${p.nom} : ${p.prix} DA`);
}

// reduce additionne tous les prix, acc part de 0 (slide 39)
const sommePrix = catalogue.reduce((acc, p) => acc + p.prix, 0);

// moyenne = somme / nombre de produits (division : slide 42)
const prixMoyen = sommePrix / catalogue.length;

// je montre comment la moyenne est calculée
console.log(`Somme des prix : ${sommePrix} DA`);
console.log(`Prix moyen : ${sommePrix} / ${catalogue.length} = ${prixMoyen} DA`);

// filter garde seulement les produits plus chers que la moyenne (slide 39)
const produitsChers = catalogue.filter(p => p.prix > prixMoyen);

// et j'affiche uniquement ceux-là
console.log(`Produits dont le prix dépasse ${prixMoyen} DA :`);
for (const p of produitsChers) {
    console.log(`  ${p.nom} : ${p.prix} DA`);
}


// ===== Question 3 : total des articles et valeur globale (avec reduce) =====

console.log("");
console.log("===== 3. Total du magasin (avec reduce) =====");

// reduce avec une fonction fléchée à accolades (slides 39 et 47) :
// à chaque tour j'affiche le cumul, puis je retourne le nouveau cumul
console.log("Nombre total d'articles :");
const totalArticles = catalogue.reduce((acc, p) => {
    console.log(`  ${acc} + ${p.quantite} (${p.nom}) = ${acc + p.quantite}`);
    return acc + p.quantite;
}, 0);
console.log(`=> Total : ${totalArticles} articles`);

// même principe pour la valeur globale : on ajoute prix x quantité de chaque produit
console.log("Valeur globale du stock :");
const valeurGlobale = catalogue.reduce((acc, p) => {
    const valeurProduit = p.prix * p.quantite;
    console.log(`  ${acc} + ${valeurProduit} (${p.nom} : ${p.prix} x ${p.quantite}) = ${acc + valeurProduit}`);
    return acc + valeurProduit;
}, 0);
console.log(`=> Valeur globale : ${valeurGlobale} DA`);


// ===== Question 4 : une fonction pour la valeur du stock d'un produit =====

// le mécanisme : une fonction qui reçoit un produit et retourne prix x quantité (slide 46)
function valeurStock(p) {
    return p.prix * p.quantite;
}

console.log("");
console.log("===== 4. Fonction valeurStock(produit) =====");
console.log("Mécanisme : valeurStock(produit) retourne produit.prix x produit.quantite");

// je vérifie qu'elle marche sur plusieurs produits : appel (slide 46), boucle (slide 45)
for (const p of catalogue) {
    console.log(`valeurStock(${p.nom}) : ${p.prix} x ${p.quantite} = ${valeurStock(p)} DA`);
}


// ===== Question 5 : appliquer différents traitements au catalogue (callbacks) =====

// "traitement" est un callback : une fonction passée en paramètre (slide 48)
function appliquerTraitement(liste, traitement) {
    for (const p of liste) { // slide 45
        traitement(p); // on appelle le callback pour chaque produit (slide 48)
    }
}

console.log("");
console.log("===== 5. Noms des produits =====");
// fonction fléchée utilisée comme callback (slides 47 et 48)
appliquerTraitement(catalogue, (p) => console.log(p.nom));

console.log("");
console.log("===== 5. Prix des produits =====");
appliquerTraitement(catalogue, (p) => console.log(`${p.prix} DA`));