"use strict"; // slide 52 : mode strict

// mes variables (slide 38), elles sont globales donc toutes les fonctions peuvent les lire (slide 51)
const nom = "John"; // string
const prenom = "Doe"; // string
let age = 30; // number
let note = 15; // number
const pi = 3.14; // const parce que pi ne change jamais (slide 52)

// chaque fonction est appelée par un bouton avec onclick (slides 18 et 46)
function f1() {
    console.log(nom); // console.log pour afficher (slide 34)
}

function f2() {
    console.log(prenom);
}

function f3() {
    // les backticks et ${} servent à mélanger du texte et des variables (slide 38)
    console.log(`${nom}-${prenom}`);
}

function f4() {
    console.log(age);
}

function f5() {
    console.log(note);
}

function f6() {
    console.log(pi);
}