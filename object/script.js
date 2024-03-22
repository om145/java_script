const obj = [];
function object(){
let x = document.getElementById("name").value ; 
let y = document.getElementById("age").value ;
let z = document.getElementById("gender").value ; 

obj.push({
    name : x,
    age : y,
    gender : z
})
console.log(obj);
document.getElementById("output").innerHTML = JSON.stringify(obj)
}
