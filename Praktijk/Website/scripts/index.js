/*
Auteur: Michal, Kolasa
Aanmaakdatum: 30/9/2022

De javascript bestand om de belangrijkste elementen responsive te maken.
*/

// Maak een prompt aan om de gebruiker te vragen om zijn leeftijd
var age = prompt("Hoe oud bent u?");

// Maak een int van een string dat je krijgt van de prompt
var ageInt = parseInt(age);

// Maak een variable voor prijs aan
var price = 0;

// Maak een boolean om te kijken of de gebruiker een ouder nodig heeft om te registreren
var parentNeeded = false;

// Maak een boolean om te kijken of de gebruiker heeft betaald
var paid = false;

// Check of de leeftijd onder 18 is, zo niet zet ouder benodig op true.
if(ageInt < 18)
{
    parentNeeded = true;
}

if(ageInt == 6)
{
    price = 77,50;
} else if(ageInt == 7 || ageInt == 8)
{
    price = 151;
} else if(ageInt === 9 || ageInt == 10)
{
    price = 156;
} else if(ageInt === 11 || ageInt == 12)
{
    price = 168;
} else if(ageInt === 13 || ageInt == 14)
{
    price = 173;
} else if(ageInt === 15 || ageInt == 16)
{
    price = 193;
} else if(ageInt === 17 || ageInt == 18)
{
    price = 198;
} else if(ageInt === 18 || ageInt == 19 || ageInt == 20 || ageInt == 21)
{
    price = 223;
} else if(ageInt > 21)
{
    price = 253;
} else {
    price = 0;
}
// Maak de text variablen aan
var ageText = "U bent " + ageInt + " jaar oud.";
var priceText = "De prijs is " + price + " euro.";

// Zet een andere tekst als er niks ingevuld is
if (!ageInt)
{
    ageText = "Geen data ontvangen!".toUpperCase();
    priceText = "Geen data ontvangen!".toUpperCase();
}

// Zet de tekst in de HTML
document.getElementById("age").innerHTML = ageText;
document.getElementById("contributionCalculator").innerHTML = priceText;
