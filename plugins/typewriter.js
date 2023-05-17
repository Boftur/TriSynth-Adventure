import * as qtexts from "./texts.js";

    const destination = document.getElementById("typedtext");

    const iSpeed = 10; // time delay of print out
    const iMaxLines = 20; // maximum lines to be displayed before removing the first one

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
            if(uglyArray.length > iMaxLines && index == uglyArray[iMaxLines - 1]) {
                destination.removeChild(destination.getElementsByTagName('span')[0]);
                uglyArray.splice(18, 1);
            }
            if(uglyArray.includes(index)) {
                destination.getElementsByTagName('span')[destination.getElementsByTagName('span').length - 1].appendChild(document.createElement("br"));
                destination.appendChild(document.createElement("span"));
            }
            if(message[index] === undefined) {
                return;
            }

            destination.getElementsByTagName('span')[destination.getElementsByTagName('span').length - 1].innerHTML += message[index++];
            setTimeout(function () { showText(message, index, interval); }, interval);
        }
    }

    function loopThroughArray (arr, index) {
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
        let firstLine = document.createElement('span');
        destination.appendChild(firstLine);
        showText (allLines, startIndex, iSpeed);
    }
    
    typewriter();