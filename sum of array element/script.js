const array = [];

function soa(){
    let num = parseInt(document.getElementById("input").value) ;
    array.push(num);
    document.getElementById("print").innerHTML = JSON.stringify(array);

    let sum = 0
    

    for(let i=0; i<array.length; i++)
    {
        sum += array[i];

        console.log(sum);
        document.getElementById("output").innerHTML = "sum:-" + sum ;
    }
    let average = sum / array.length ;
    document.getElementById("average").innerHTML = "Average:-" + average ;

} 