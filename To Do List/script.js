function tdl(){
    let name = document.getElementById("name").value ;
    let task = document.getElementById("task").value ;
    let dd = document.getElementById("dd").value ;
    // let pri =""
    let date = document.getElementById("date").value ;
    let storage = JSON.parse(sessionStorage.getItem("item"));


//     if(dd === "high"){
//         pri = "high";
//         // break;
//     }
//     else if(dd === "medium"){
//         pri = "medium" ;
//     }
//     else{
//         pri = "low";
//     }
    
//    console.log(pri);
        
    


    console.table(name, task,dd,date);

    
    if(storage == null){
        storage = []
    }



    storage.push({
        name : name,
        task : task,
        dd : dd,
        date : date
    })

    sessionStorage.setItem("item",JSON.stringify(storage));
    console.log (JSON.parse(sessionStorage.getItem("item"))) ;
   
   
   
    // let r1 = document.createElement("tr")
    // let cr1 = document.createTextNode(name)
    
    // r1.appendChild(cr1);
    // console.log(r1);

    // document.getElementById("body").appendChild(r1);

    // let r2 = document.createElement("tr")
    // let cr2 = document.createTextNode(task)
    
    // r2.appendChild(cr2);
    // console.log(r2);

    // document.getElementById("body").appendChild(r2);

    let bo = document.getElementById("body");

    while(bo.firstChild){
        bo.removeChild(bo.firstChild)
    }


    storage.forEach((item) => {

        // let tbody = document.getElementById

        let row = document.createElement("tr") ;

        let r1 = document.createElement("td") ;
        let r2 = document.createElement("td") ;
        let r3 = document.createElement("td") ;
        let r4 = document.createElement("td") ;

        // let c1 = document.createTextNode(name) ; 
        // let c2 = document.createTextNode(task) ;
        // let c3 = document.createTextNode(dd) ;
        // let c4 = document.createTextNode(date) ;

        r1.innerHTML = item.name;
        r2.innerHTML = item.task ;
        r3.innerHTML = item.dd ;
        r4.innerHTML = item.date ;

        row.appendChild(r1);
        row.appendChild(r2);
        row.appendChild(r3);
        row.appendChild(r4);

        bo.appendChild(row);


        // row.className = "rrow";


        // document.querySelector(".rrow").style.paddingLeft = "120px"


        // document.getElementById("body").appendChild(row);

        // document.getElementById("body").innerHTML = row
        



    });
}

    function show(){
    
        document.getElementById("contant").style.display = "block" ;

    }

    function cl(){
        document.getElementById("contant").style.display = "none"
    }

    