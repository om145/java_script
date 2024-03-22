
const a = [];
function sort(){
    let num = document.getElementById("a").value ;
    a.push(num);
    document.getElementById("b").innerHTML = "Original Array:-" +  JSON.stringify(a) ;

let r = a.sort(function (a, b) { return a - b });
document.getElementById("r").innerHTML = "Sorted Array:-" + JSON.stringify(r) ;

}