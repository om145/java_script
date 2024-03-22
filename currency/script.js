function convert(){
    let r = document.getElementById("rs").value ; 

    let con = r*82.88;
    console.log(con);
    document.getElementById("usd").value = con ;

}

function con2(){
    let u = document.getElementById("usd").value ;
    
    let con = u/82.88 ; 
    document.getElementById("rs").value = con ;
}