
let destination_test = document.getElementById("mytextinput")

console.log(destination_test)

function navigator_function(n) {
    if (n == "Next")
        location.href = "#room_main_1"
        console.log("User input: " + n)
    
    if (n == "Goghe")
        location.href = "#power"
        console.log("User input: " + n)



}


// Inputer som pekar hit:
// <input placeholder="Enter some text" name="mytextsinput" onChange="navigator_test(this.value)" type="text" id="mytextinput"/>