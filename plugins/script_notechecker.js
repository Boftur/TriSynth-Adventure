import { loopThroughArray } from "./typewriter.js";

var correctNotes_wisdom = [62,65,69];
var correctNotes_power = [60,62,64]
var userNotes = [];

var correctNotes = [];
correctNotes.push({hash:"#room_piano_keys", notes: [65,69,74,76]});
correctNotes.push({hash:"#power", notes: [62,65,75,80,50]});

waxml.addEventListener("init", e => {


    // This logic applies to a waxmp-midi-controller inside a div with class= "subtractive"
    document.querySelectorAll("waxml-midi-controller").forEach(keyboard_midi => {
    
        keyboard_midi.addEventListener("keydown", e => {
            console.log(e.detail.keyNum);
    
            // add keyNum to userNotes
            userNotes.push(e.detail.keyNum);
            console.log("Usernotes has " + userNotes.length + " elements.");

            let targetNotes = correctNotes.find(entry => entry.hash == window.location.hash).notes;
            if(userNotes.length == targetNotes.length){

                checkKeyboardInput(userNotes, targetNotes);
            }

        });
        keyboard_midi.addEventListener("midimessage", m => {
            console.log(m.detail.keyNum);
    
            // add keyNum to userNotes
            userNotes.push(m.detail.keyNum);
    
            let targetNotes = correctNotes.find(entry => entry.hash == window.location.hash).notes;
            if(userNotes.length == targetNotes.length){

                checkKeyboardInput(userNotes, targetNotes);
            }
        });
    
    });

function checkKeyboardInput(userNotes, targetNotes) {
    console.log(`Correct: ${targetNotes}, UserInput: ${userNotes}`);


    if(JSON.stringify(userNotes) == JSON.stringify(targetNotes)){
        // goto success page
        switch(window.location.hash){

            case "#room_piano_keys":
                window.location.href = "#room_exit";
                break;

            case "#power":
                window.location.href = "#mid_p";
                break;
            
        }

    } else {

        console.log("Four wrong keys entered");
        // reset entered notes
        userNotes.length = 0;
        //alert("Nothing happens.");
        document.getElementById("error_room_piano_keys").style.opacity = 1;
        setTimeout(function() { document.getElementById("error_room_piano_keys").style.opacity = 0; }, 2000);
    }
}
    



    // // connect a function to a click on a link (in this case a link with id="btn1")
    // document.querySelector("#btn1").addEventListener("click", e => {
       
    //     // do something. i.e. set a variable to a value

    //     // set correctNotes to Twinkle Twinkle
    //     correctNotes = [60,60,67,67,69,69,67];

    //     // reset userNotes
    //     userNotes = [];
    // });

});