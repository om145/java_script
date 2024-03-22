const array = [];
const changeArray = [];
function map() {
  let before = document.getElementById("input").value;
  array.push(before);
  console.log(before);

  let newSalaries = array.map((nextValue) => nextValue * 2);

  document.getElementById("before").innerHTML ="before:-" + JSON.stringify(array);
  document.getElementById("after").innerHTML ="after:-" + JSON.stringify(newSalaries);
}
