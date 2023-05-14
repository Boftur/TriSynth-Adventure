import * as qtexts from "./texts.js";
//const quest_text_power = qtexts.quest_text("power")

// set up text to print, each item in array is new line
    let iSpeed = 100; // time delay of print out
    let iIndex = 0; // start printing array at this position
    let iScrollAt = 20; // start scrolling up at this many lines
     
    let iTextPos = 0; // initialise text position
    let sContents = ''; // initialise contents variable
    let iRow; // initialise current row
     
    function typewriter()
    {
        // Why? iRow = Math.max(0, iIndex-iScrollAt);
        let aText = getDataFromArray();

        aText.forEach(ex => {
            ex += "<br/>";
            sContents += ex;
        });
        //console.log(sContents)

        let destination = document.getElementById("typedtext");
        destination.innerHTML = sContents;

        // while ( iRow < iIndex ) {
        //     sContents += aText[iRow++] + '<br />';
        // }
    
        //  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        let iArrLength = aText.length; // the length of the text array
        if ( iTextPos++ == iArrLength ) {
            iTextPos = 0;
            iIndex++;
            if ( iIndex != aText.length ) {
                iArrLength = aText[iIndex].length;
                setTimeout("typewriter()", 500);
            }
        } else {
            setTimeout("typewriter()", iSpeed);
        }
    }

    function getDataFromArray() {
        return qtexts.quest_text("power");
    }
    
    typewriter();