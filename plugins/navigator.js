
let destination_input = document.getElementById("mytextinput")

console.log(destination_input)

function navigator_function(n) {
    switch(n) {
        case "start":
            location.href = "#room_main_1";
            console.log("User input in Navigator: " + n);
        break;
// FORMALIA
        // case "":
        //     location.href = ""
        //     console.log("User input in Navigator: " + n)
        case "help":
            location.href = "#help";
            console.log("User input in Navigator: " + n);
        break;

        case "help please":
            location.href = "#help_please";
            console.log("User input in Navigator: " + n);   
        break;

        case "back":
            location.href = "#room_main_2";
            console.log("User input in Navigator: " + n); 
        break;

// TRIALS
    // PIANO
        case "piano":
            location.href = "#room_piano_nokeys";
            console.log("User input in Navigator: " + n); 
        break;

        case "bureau":
            location.href = "#room_piano_nokeys";
            console.log("User input in Navigator: " + n); 
        break;

        case "forward":
            location.href = "#room_piano_nokeys";
            console.log("User input in Navigator: " + n);
        break;   

        case "straight ahead":
            location.href = "#room_piano_nokeys";
            console.log("User input in Navigator: " + n);
        break;   


    // PAINTING        
        case "gogh":
            location.href = "#room_painting";
            console.log("User input in Navigator: " + n);
        break;

        case "painting":
            location.href = "#room_painting";
            console.log("User input in Navigator: " + n);
        break;

        case "picture":
            location.href = "#room_painting";
            console.log("User input in Navigator: " + n);
        break;

        case "go right":
            location.href = "#room_painting";
            console.log("User input in Navigator: " + n);
        break;   

        case "right":
            location.href = "#room_painting";
            console.log("User input in Navigator: " + n);
        break;   


    // WALL
        case "wall":
            location.href = "#room_wall";
            console.log("User input in Navigator: " + n);
        break;     
        
        case "backwards":
            location.href = "#room_wall";
            console.log("User input in Navigator: " + n);
        break;   

        case "behind":
            location.href = "#room_wall";
            console.log("User input in Navigator: " + n);
        break;   

        default:
            location.href = "#shadow_realm";
            console.log("User input in Navigator sent them to the shadow realm. (Their input was: " + n + ")");
        break;    


}

}


// Inputer som pekar hit:
// <input placeholder="Enter some text" name="mytextsinput" onChange="navigator_test(this.value)" type="text" id="mytextinput"/>