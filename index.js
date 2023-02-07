const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

let psw1el = document.getElementById("psw1-El");
let psw2el = document.getElementById("psw2-El");

function getPassword() {
    psw1el.textContent = ""
    psw2el.textContent = ""
    for ( let i = 0; i < passwordLength; i++) {
        let char1 = Math.floor(Math.random()* characters.length);
        let char2 = Math.floor(Math.random() * characters.length);
        psw1el.textContent += characters[char1] 
        psw2el.textContent += characters[char2] 
    }
}