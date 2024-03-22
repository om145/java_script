function fibo(){
    let a = 0;
    let b = 1;
    let result;

    let input = document.getElementById("in").value;

    if(input == ""){
        alert("please Enter Any Number");
    }else{

    for(let i=2; i<=input; i++){
        result = a + b;
        a = b;
        b = result;

        console.log(result);
        document.getElementById("res").innerHTML = result;


    }
}
}