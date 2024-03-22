const array = [];

function ase() {

let num = document.getElementById("input").value;
array.push(num);
console.log(array);


  let ase = array.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("ase").innerHTML = "Assending" + JSON.stringify(ase);

  let des = array.sort(function (a, b) {
    return b - a;
  });

  document.getElementById("des").innerHTML = "Desending" + JSON.stringify(des);
}
