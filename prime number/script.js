function prime(){
    let number = document.getElementById("input").value ;

    if(number == 1 ){
        console.log(number + " is not prime");
         result = number + " is not prime";
        
    }
    else if(number < 1){
        console.log(number + " is not prime")
        result = number + " is not prime";
        
    }
    else{
        // no 15
        for(let i=2; i<number; i++){
            if(number % i == 0){
                 result = number + " is not prime"
                 break;
            }
            else{
                 result = number + " is prime"
            }
        }
        document.getElementById("output").innerHTML = result;
    }
}