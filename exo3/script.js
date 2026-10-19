"use strict"; // slide 52 : mode strict

// les données : un tableau d'objets (slides 39, 40 et 41)
// moyenne = 4e valeur de l'énoncé, autre = 5e valeur
const Students = [
    { id: 1000, prenom: "JOHN",   nom: "DOE",     moyenne: 14, autre: 5 },
    { id: 2000, prenom: "BOB",    nom: "CARLTON", moyenne: 7,  autre: 1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH",   moyenne: 13, autre: 3 }
];

// fonction B : elle prend un nombre (slide 38) et renvoie true ou false (slide 46)
function estAdmis(moyenne) {
    // une comparaison donne directement un booléen (slide 42)
    return moyenne >= 10;
}

// fonction A : appelée par le bouton avec onclick (slide 18), elle appelle B (slide 46)
function deliberation() {
    // for..of pour passer sur chaque étudiant (slide 45)
    for (const etudiant of Students) {
        // opérateur ternaire (slide 43) : ADMIS si B renvoie true, sinon AJOURNÉ
        const resultat = estAdmis(etudiant.moyenne) ? "ADMIS" : "AJOURNÉ";
        console.log(`${etudiant.id}: ${resultat}`); // slides 34 et 38
    }
}