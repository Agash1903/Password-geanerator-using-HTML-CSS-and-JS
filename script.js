const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+",
"{","[","]","}",",","|",":",";","<",">",".","?","/"];

const firstinput = document.getElementById("input-text")
const secondinput = document.getElementById("input-text-1")
const password = document.querySelector(".password-gen")
const fbtn =  document.getElementById("copy-btn")
const sbtn = document.getElementById("copy-btn-1")

password.addEventListener('click',()=>{
    firstinput.innerHTML = ''
    secondinput.innerHTML = ''

    for(let i=0; i<14; i++){
        let randomfnum = Math.floor(Math.random()*characters.length)
        let randomsnum = Math.floor(Math.random()*characters.length)
        firstinput.innerHTML += characters[randomfnum]
        secondinput.innerHTML += characters[randomsnum]
    }
    fbtn.style.display = "block"
    sbtn.style.display = "block"
    copyAlert(fbtn)
    copyAlert(sbtn)
})

function copyAlert(data){
    data.addEventListener("click",()=>{
        if(data === fbtn){
            navigator.clipboard.writeText(firstinput.textContent)
        }
        else if(data === sbtn){
            navigator.clipboard.writeText(secondinput.textContent)
        }
        alert("Copied to Clibboard")
    })

}
