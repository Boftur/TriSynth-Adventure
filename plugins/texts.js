export function quest_text(user_input) {
    if ("user_input" == "power")

        // Leave this console output, or everything breaks
        console.log(" ");

        // This returns an array with 25 numbered entries for easy controlling
        let array = new Array();

        for(let i = 1; i <= 25; i++) {
            let numberedLine = i.toString().repeat(20);
            array.push(numberedLine);
        }
        
        return array;

        return Array(
            "Welcome to the real world, Neo.",
            "Wanna take a red 'un or a blu 'un",
            "Yo how's it goin",
        );



  }