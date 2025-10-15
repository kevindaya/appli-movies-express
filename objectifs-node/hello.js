// mon premier VRAI script Node.js
// Date: 13 Octobre 2025

const name = "Kevin Ndaya";
const goal = "Devenir Backend Developer";
const salaryGoal = `2000$/mois en remote ou bien ${2000 * 566}FCFA/mois`;

console.log("========================================");
console.log(`Bonjour ${name}!`);
console.log(`Objectif: ${goal}`);
console.log(`Salaire visé: ${salaryGoal}`);
console.log(`Date de début: ${new Date().toLocaleDateString("fr-FR")}`);
console.log("========================================");

// Petit calcul motivant

const monthsToJob = 12;
const hoursPerWeek = 10;
const totalHours = monthsToJob * 4 * hoursPerWeek;

console.log(
  `\nSi je code ${hoursPerWeek}h/semaine pendant ${monthsToJob} mois`
);
console.log(`Total! ${totalHours} heures d'experience`);
console.log(`C'est LARGEMENT suffisant pour devenir Junior Backend Dev!`);
console.log("Let's go!");
