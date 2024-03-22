function ctf(){
    let c = parseFloat(document.getElementById("cel").value) ;
    let f = parseFloat(document.getElementById("fera").value) ; 

    let r = c * 1.8 + 32 ;
    document.getElementById("fera").value = r ;

    // let p = (f -32) * 5/9 ; 
    // document.getElementById("cel").value = p ;
}