function bugtra(){

    let text = document.getElementById("name").value ;
    let amount = document.getElementById("rs").value ;
    let transaction = JSON.parse(localStorage.getItem("item"));
    type = "" ;
    if(amount >= 0){
        type = "i";
    }else{
        type = "e"
    }

    if(transaction == null){
        transaction = []
    }

    transaction.push({
        text : text,
        amount : amount,
        type : type
    })

    localStorage.setItem("item",JSON.stringify(transaction));
    console.log(JSON.parse(localStorage.getItem("item")))

    let sum = 0;

    transaction.forEach((x) => {
        sum += parseInt(x.amount);
    });

    console.log(sum)
    document.getElementById("balance").innerHTML = sum ;


    let li =  document.createElement("li")
    let his = document.createTextNode(text + " " + amount);

    li.appendChild(his);

    document.getElementById("history").appendChild(li)

    let income = 0
    let expences = 0

   transaction.forEach((x) => {

    if(x.type === "i"){
        income += parseInt(x.amount)
    }else{
        expences += parseInt(x.amount)
    }

   })

//    if(type === "i"){
//     his.classlist.add("in");
//    }
//    else if(type === "e"){
//     his.classlist.add("ex");
//    }

   document.getElementById("income").innerHTML= income;
   document.getElementById("expence").innerHTML= expences;

}