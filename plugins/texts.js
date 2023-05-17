export function quest_text(user_input) {
    if (user_input == "intro1"){
        // Leave this console output, or everything breaks
        console.log(" ");
        return Array(
            "Welcome, candidate DEC-PDP-11",

            "To begin this simulation, please fill in the following in the boxes provided",
             "your name and employee ID.", 
            " ",
            "Before you get started,",
            "We recommend using headphones for best experience and likelihood of success.",
            "We also strongly recommend steady access to seating and oxygen.",
            " ",
            "Our research has been most conclusive on this point."
            
        );}

    if (user_input == "intro2"){
        // Leave this console output, or everything breaks
        console.log(" ");
        return Array(
            "You will be put in a simulated room where the stated goal is to escape your current predicament by finding the right key.",

            "Provided you're not a violinist a wet night at the pub, I'm sure you'll manage.",
            
            "-",
            
            "Going about it is rather simple:",
            
            "Keep your commands short and clear.", 
            "No “Look at the couch in the left corner by the refrigerator”. I know which couch you mean.",   
            "Just type: Couch", 
            " ",
            "Don't patronise me.",
            "Gee.",
            
            "As with playwrights, anything containing more than 20 characters is overly complicated, stupid, and I won't get half of what you are trying to say with it.", 
            
            
            "Lastly;",
            "If you find yourself stuck, I can't  *actually* help you. That's a wee too advanced for our purposes.", 
            
            "Should you write “Help” anyway and be nice about it, I might yell encouragements"
            
        );}

    if (user_input == "http://127.0.0.1:5500/#intro3"){
    // Leave this console output, or everything breaks
    console.log(" ");
    return Array(
        "Welcome to the real world, Neo.",
        "Wanna take a red 'un or a blu 'un",
        "Yo how's it goin"
    );}
    
    
    
    
    
    
    
    
    else {

        return Array(
            "Porn",
            "Lots of porn.")


    }

        // This returns an array with 25 numbered entries for easy controlling
        // let array = new Array();

        // for(let i = 1; i <= 25; i++) {
        //     let numberedLine = i.toString().repeat(20);
        //     array.push(numberedLine);
        // }
        
        // return array;





  }