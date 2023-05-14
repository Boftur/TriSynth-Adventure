import * as qtexts from "./texts.js";

    const destination = document.getElementById("typedtext");

    const iSpeed = 100; // time delay of print out

    let uglyArray = new Array();
     
    function typewriter()
    {
        let aText = getDataFromArray();
        writeAllLines(aText, 0);
    }

    function getDataFromArray() {
        return qtexts.quest_text("power");
    }

    function showText(message, index, interval) {
        if (index <= message.length) {
            if(uglyArray.includes(index)) {
                destination.appendChild(document.createElement("br"));
            }
            if(message[index] === undefined) {
                return;
            }

            let tester = message[index];
            destination.append(message[index++]);
            setTimeout(function () { showText(message, index, interval); }, interval);
        }
    }

    function loopThroughArray (arr, index) {
        let startIndex = 0;

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

    function writeAllLines(arrayOfStrings, index) {
        let startIndex = 0;
        let allLines = loopThroughArray(arrayOfStrings, index);
        showText (allLines, 0, iSpeed);
    }
    
    typewriter();