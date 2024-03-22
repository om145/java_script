function palin(){
    let inp = document.getElementById("input").value
    let no = inp.split("").reverse("").join("")
    
    if(inp == no){
        console.log("It is Palindrome");
        document.getElementById("result").innerHTML = "It Is Palinderome";

    }else{
        console.log("It is not a Palidrome");
        document.getElementById("result").innerHTML = "It Is Not palindrome"
    }
}