//Qwerty character(s) array generator.
//by Michael Sparks
function _charGen(charSet = "alphaLower"){
    //Security Clause: converts, filters and checks arguments for correct use (string) in the function; hard codes correct arguments.
    charSet.toString().toLowerCase().includes("alphalower") ? charSet = "alphaLower" :
    charSet.toString().toLowerCase().includes("alphaupper") ? charSet = "alphaUpper" :
    charSet.toString().toLowerCase().includes("chars") ? charSet = "chars" : charSet = null;
    //Guard Clause: checks if the passed argument is of string type (or null) and kills function if not.
   if (typeof charSet !== "string"){ return `Error: Wrong argument type, use string type args "alphaLower", "alphaUpper" or "chars".` }
   //Initialize a malleable varaible for array size.
   let arraySize = null;
    //Set the charSetArray size based on the argument and provide a limit to loop iterations
        if (charSet === "alphaLower" || charSet === "alphaUpper"){
            arraySize = 26;
        } else if (charSet === "chars") {
            arraySize = 33;
        } else {
            throw `Error: Something went wrong setting the character array size`
        }
    //Create an array with the size needed for the character(s) set(s). 
    const charSetArray = Array(arraySize);
    //Fill the charSetArray with character(s) set(s) based on the argument and limit loop iterations.
    for (let i = 0; i < charSetArray.length; i++){
        //if argument is 'alphaLower' build lower case alphabet array
        if (charSet === "alphaLower") {
            // 97 - 122 fromCharCode() range for lower case alphabet
            charSetArray[i] = String.fromCharCode((i + 97))
        //if argument is 'alphaUpper' build upper case alphabet array
        } else if (charSet === "alphaUpper") {
            // 65 - 90 fromCharCode() range for upper case alphabet
            charSetArray[i] = String.fromCharCode((i + 65))
        //if argument is 'chars' build special character array
        } else if(charSet === "chars") {
            switch(i <= 32) {
                case (i <= 15):
                    // 32-47 fromCharCode() range for special characters set #1
                    charSetArray[i] = String.fromCharCode(i + 32)
                    break;
                case ((i > 15) && (i <= 22)):
                    // 58-64 fromCharCode() range for special characters set #2
                    charSetArray[i] = String.fromCharCode((i - 16) + 58)
                    break;
                case ((i > 22) && (i <= 28)):
                    // 91-96 fromCharCode() range for special characters set #3
                    charSetArray[i] = String.fromCharCode((i - 23) + 91)
                    break;
                case ((i > 28) && (i <= 32)):
                    // 123-126 fromCharCode() range for special characters set #4
                    charSetArray[i] = String.fromCharCode((i - 29) + 123)
                    break;
            }
        } else {
            throw `Error: Something went wrong building the character array.`
        }
     }
     return charSetArray
}
//console.log(_charGen())
module.exports = { _charGen }