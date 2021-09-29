// button click
var btntranslate = document.querySelector("#btn-translate"); 
btntranslate.addEventListener("click" , clickeventhandler);
// reading Input
var txtinput = document.querySelector("#txt-input");
// output
var outputtxt = document.querySelector("#txt-output");




var serverURL = "https://api.funtranslations.com/translate/pirate.json";
// Url creator
function urlcreator(input){
    return serverURL + "?" + "text=" + input ;
}

function errorHandler(error){
    alert("error occured", error);
}
// Event handler 
function clickeventhandler(){
    console.log("Button clicked");
    var txt = txtinput.value;
    console.log(txt);
    console.log(urlcreator(txt));
    var finalURL = urlcreator(txt);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputtxt.innerText = translatedText; 
            
    })
        .catch(errorHandler)


}
// console.log(outputtxt.innerText);
