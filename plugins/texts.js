export function quest_text(user_input) {
    switch(user_input) {

        case "intro1":
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
            
        );
        break;


    case "intro2":
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
            
            "Should you write “Help” anyway and be nice about it, I might yell encouragements.",
            " ",
            "Type start to begin."
        );
        break;

    case "room_main_1":
        // Leave this console output, or everything breaks
        console.log(" ");
        return Array(
            "Over the four perfectly symmetrical walls a blossoming tapestry where small, silvery leaves seem to cling and climb along the walls.",
            "It's the type of room where one would like a satin couch, silken draperies and dotted porcelain cups for afternoon tea.",
            " ",
            "The interior decorator appears to have given up halfway through.",
            " ",
            "There are only three objects:",
            " ",
            "There is a large chest in dark oak along the wall to your left, of the type that would suit a brandy-smelling sea captain. On the heavy lid is merely a clasp.",

            "Straight ahead is what appears to be a wooden bureau, what looks like ivory fish-fingers strewn about. Occasional black ones are posed at regular intervals.",

            "On the right wall is an oil painting, large enough to cover a quarter of the wall. An ornate frame of matted silver envelopes an Arthurian castle, solitary in its absence of people.",

            "Doubtlessly a romantics rose-tinted reminiscence of darker times.", 

            "Behind you is a solid wall. Just a wall." 

        );
        break;

    case "room_main_2":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "You go back to the main room.",

                "Along the wall is the chest still. The piano hasn't dared move an inch.",
                
                "The painting remains the same. Classic arts are not known for their quick style changes.",
                
                "The wall is…",
                
                "Still there too."
                
        );
        break;


    case "room_painting":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "The dark castle looms gravely over a dusky lake mirroring a sootstained sky. You think it's probably night. I think it was good modernism came about to shake things up.",
                " ",

                "In the darker bottom of the painting is a name of the piece and, presumably, a year;",
                " ",
                "“FADE”",
                "1367"
                
        );
        break;


    case "room_piano_nokeys":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "Ah.",
                " ",
                "You note that upon closer inspection, that's a piano. Which is much more reasonable in hindsight.", 
                " ",
                " ",
                "The keys are laden with a thin layer of dust." 
                
                
        );
        break;


    case "room_piano_keys":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "The piano seems to be in working order.",
                "",
                "Play us a song, will ya?"
        );
        break;


    case "room_wall":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
            "You successfully surmise it is, indeed, a wall.",
            "",
            "",
            "Congrats."
                
        );
        break;

    case "room_floor":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
            "Ah, yes, the floor is made out of floor."
                
        );
        break;


    case "room_exit":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "As the four notes of the Dm7 in first inversion rings out you hear a click as the chest opens to reveal a key on a satin pillow.",
                "Picking the key up, you notice something glaring at you.",
                " ",
                "It's the wall.",
                " ",
                "The wall glares at you.",
                " ",
                "Still glaring, louder this time, it slides to the side.", 
                " ",
                "Before you is revealed a square hole in the wall covered by a vertically positioned lid.",
                " ",
                "There is a handle, and a bronze keyhole beneath it. A door!"
                
        );
        break;

    case "ending":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "You put the key into the lock and turn it. The door opens outwards to a view of shapes, colour and textures.",
                "Your eyes are gradually accustomed to whatever lies ahead. Perhaps a classroom, or a bedroom. An office of sorts? Maybe you hear birds chirping along to some nameless tune outside.",
                "What would I know, I’m just a few symbols, numbers and letters in some program.", 
                " ",
                "Take a breath.",
                " ",
                "I want to thank you for sharing this time with me, I do so hope you found it bearable.",
                " ",
                "It’s a lovely day to appreciate existence.",
                " ",
                " ",
                "Farewell now",      
                
        );
        break;

    case "help":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "What's the magic word?");
        break;

    case "help_please":
            // Leave this console output, or everything breaks
            console.log(" ");
            return Array(
                "Keep it simple:",
                "Piano, Wall, Painting are good words to try",
                "Or maybe just give up, go outside and get some sun, what do I know.");
        break;


    default:
        return Array(
            "Bad person.",
            "Stop breaking stuff.",
            "Press F5 twice and go again.")


    

        // This returns an array with 25 numbered entries for easy controlling
        // let array = new Array();

        // for(let i = 1; i <= 25; i++) {
        //     let numberedLine = i.toString().repeat(20);
        //     array.push(numberedLine);
        // }
        
        // return array;


    }


  }
}