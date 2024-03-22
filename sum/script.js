function sumadd(){
 let number1 = parseInt(document.getElementById("n1").value);
 let number2 =  parseInt(document.getElementById("n2").value);

  let result =   number1 + number2;
  console.log(result);
  document.getElementById("res").innerHTML = "total:-" + result ;
}

function sumsub(){
    let num1 = parseInt(document.getElementById("n11").value);
    let num2 = parseInt(document.getElementById("n12").value);

    let result = num1 - num2;
    console.log(result);
    document.getElementById("h1").innerHTML = "Total:-" + result;
}

function summul(){
    let num1 = parseInt(document.getElementById("n21").value);
    let num2 = parseInt(document.getElementById("n22").value);
     
    let result = num1 * num2;
    console.log(result);
    document.getElementById("h2").innerHTML = "Total:-" + result;
}

function sumdiv(){
    let num1 = parseInt(document.getElementById("n31").value);
    let num2 = parseInt(document.getElementById("n32").value);
     
    let result = num1 / num2;
    console.log(result);
    document.getElementById("h3").innerHTML = "Ttal:-" + result;
}

function even(){
    let num = parseInt(document.getElementById("eo").value);

    if(num%2==0){
        document.getElementById("result").innerHTML = "Number is Even";
    }
    else{
        document.getElementById("result").innerHTML = "Number is Odd";
    }


}