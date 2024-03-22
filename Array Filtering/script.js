const main = [];
const odd = [];
const even = [];

function filter(){

let num = document.getElementById("input").value ;

main.push(num);
console.log(main);

if(num%2 == 0){
    even.push(num);

}else{
    odd.push(num);
}

document.getElementById("odd").innerHTML = odd ;
document.getElementById("even").innerHTML = even ;
}