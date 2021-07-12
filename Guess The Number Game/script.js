// Guess The Number Game
//Requirements

//Requirements 1 
//Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam.
//"Welkom! Wat is je naam?"


let naam = prompt("Welkom! Wat is je naam?");

//Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.
//Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"

alert ("Hey " + naam);

//Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer.
// e.g: "Voer een nummer in van 0 tot 25 om te beginnen met raden..."

function raadHetnummer() {
        let willekeurigNummer = math.floor(math.random ()*26);
        let vraagInputcijfer = prompt;
        vraagInputcijfer = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
        if (vraagInputcijfer < willekeurigNummer){
            alert ("Dat is niet correct");
        }else if (vraagInputcijfer > willekeurigNummer){
            alert ("Dat is niet correct");
        }else if (vraagInputcijfer == willekeurigNummer){
            alert ("Gefeliciteerd je hebt gewonnen");

        }
        
    }

    //Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen.
// Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()

//Als gebruiker wil ik een nummer in kunnen voeren en vervolgens op enter klikken.

//Als gebruiker wil ik een bericht zien als ik het nummer verkeerd heb geraden e.g.
//"Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.





//Als gebruiker wil ik een bericht ontvangen als ik het nummer goed heb geraden. e.g:
//"Gefeliciteerd je hebt gewonnen". Het spel is nu af.



//Als gebruiker wil ik een bericht zien als het spel af is.
// "e.g: Dag [naam]. Tot de volgende keer"






