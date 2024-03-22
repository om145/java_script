const arr = ["banana","mango","orange","apple","graps"];

function index(){
    let name = document.getElementById("input").value ;
    let r = arr.indexOf(name);
    // document.getElementById("options").innerHTML = `<h1>options are :- ${arr}</h1>` ;
    document.getElementById("output").innerHTML = `<h1>Index is ${r}</h1>`
}