const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('random-password-one')
let passwordTwo = document.getElementById('random-password-two')
hasPasswordOne = false
hasPasswordTwo = false

function randomGenerate() {
    for (let i = 1; i < 16; i++) {
     let characterIndexOne = Math.floor(Math.random() * characters.length)
     let characterIndexTwo = Math.floor(Math.random() * characters.length)
     passwordOne.textContent +=  characters[characterIndexOne]
     hasPasswordOne = true
     passwordTwo.textContent +=  characters[characterIndexTwo]
     hasPasswordTwo = true
    }
    return passwordOne.textContent
    return passwordTwo.textContent
}
 function generatePasswords() {
     if ( (hasPasswordOne == false) && (hasPasswordTwo == false) ) {
        randomGenerate()
    } else {
        passwordOne.textContent = ''
        passwordTwo.textContent = ''
        randomGenerate() 
    }
 }


