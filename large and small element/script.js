const array = [];
function sal(){
    let inp = document.getElementById("input").value ; 
    array.push(inp);

    let sort = array.sort(function(a,b) {return a - b});
    

    let small = sort[0];
    let large = sort[sort.length-1] ;
    document.getElementById("small").innerHTML = "small:-" + small ;
    document.getElementById("large").innerHTML = "large:-" + large ;
}
