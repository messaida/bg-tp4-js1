"use strict"; // slide 52 : mode strict

// tableau de chaînes (slide 39)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// un objet avec 3 propriétés (slide 40)
const etudiant = { nom: "John", prenom: "DOE", age: 30 };

// tableau d'objets (slide 41)
const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
    // boucle for pour parcourir le tableau (slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]); // etudiants[i] = l'élément à l'indice i (slide 39)
    }
}

function f2() {
    console.log(etudiant); // on affiche l'objet en entier (slide 40)
}

function f3() {
    // for..of, plus simple que le for quand on n'a pas besoin de l'indice (slide 45)
    for (const e of listeEtudiants) {
        // e.nom pour lire une propriété (slide 40), backticks pour le texte (slide 38)
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    }
}