// Imports quest-texts from texts.js
import * as qtexts from "./texts.js";

    let destination = document.getElementById("typedtext_intro1");
// Typewriter-variables
    const iSpeed = 30; // time delay of print out
    const iMaxLines = 13; // maximum lines to be displayed before removing the first one
    let currentAmountOfLines = 1;

    let uglyArray = new Array();

// On hashchange redefines destination and shoots typewriter
    var current_location = "intro1"
    window.addEventListener("hashchange", () => {
        currentAmountOfLines = 1;
        current_location = location.hash.substring(1);
        console.log("Current_location is:" + current_location);
        let current_destination = tripAdvisor();
        destination = document.getElementById(current_destination);
        console.log("Reseledaren returnerar just nu:" + current_destination);
        uglyArray.length = 0;
        typewriter();
    });


// Defines the destination, returns "typedtext_HASHGOESHERE"
// Idea was every section in index gets a unique ID based on current hash. Typewriter shoots to specific visible section.
    
    function tripAdvisor(){
        const segments = location.hash.split('#');
        const last = segments.pop() || segments.pop(); // Handle potential trailing slash
        console.log("Current hash is: " + last);

        // hash + typedtext -> destionationsID för print
        const destination_parser = "typedtext_" + last
        console.log("Current parser: " + destination_parser)
        return(destination_parser)
    }
     

// Typewriter-thing
    function typewriter()
    {
        let aText = getDataFromArray();
        writeAllLines(aText, 0);
    }

    function getDataFromArray() {
        return qtexts.quest_text(current_location);
    }

    function showText(message, index, interval) {
        if (index < message.length) {
            if(uglyArray.includes(index)) {
                if(currentAmountOfLines >= iMaxLines) {
                    destination.removeChild(destination.getElementsByTagName('span')[0]);
                    //     destination.getElementsByTagName('span')[0]
                    uglyArray.splice(iMaxLines - 1, 1);
                }
                destination.getElementsByTagName('span')[destination.getElementsByTagName('span').length - 1].appendChild(document.createElement("br"));
                destination.appendChild(document.createElement("span"));
                if(currentAmountOfLines < iMaxLines) {
                    currentAmountOfLines++;
                }
            }
            if(message[index] === undefined) {
                return;
            }

            destination.getElementsByTagName('span')[destination.getElementsByTagName('span').length - 1].innerHTML += message[index++];
            setTimeout(function () { showText(message, index, interval); }, interval);
        }
    }

    export function loopThroughArray (arr) {
        let uglyString = "";
        
        for(let element of arr) {
            let lastElementInUglyArray = uglyArray[uglyArray.length-1];
            if(lastElementInUglyArray === undefined) {
                uglyArray.push(element.length);
            }
            else {
                uglyArray.push(lastElementInUglyArray + element.length);
            }
            uglyString += element;
        };
        return uglyString;
    }

    function writeAllLines(arrayOfStrings) {
        let startIndex = 0;
        let allLines = loopThroughArray(arrayOfStrings);
        let firstLine = document.createElement('span');
        destination.appendChild(firstLine);

        showText (allLines, startIndex, iSpeed);
    }
    
    //window.addEventListener("load", () => typewriter());
    typewriter();
