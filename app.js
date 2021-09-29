var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputtxt = document.querySelector("#txt-output")

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function urlcreator(input){
    return serverURL + "?" + "text=" + input 
}



btntranslate.addEventListener("click" , function clickeventhandler(){
    console.log("clicked");
    console.log("input", txtinput.value);
});

// txtinput.addEventListener("click" , function clickeventhandler(){
    
    
// });
